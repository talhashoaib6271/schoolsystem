class MarksController < ApplicationController
  include MarksHelper
  before_action :set_mark, only: [:show, :edit, :update, :destroy]

  # GET /marks
  # GET /marks.json
  def index
    @grades = Grade.where(section: nil).order('name')
    @bridges = get_employee_bridges(current_user)
    @classes = []
    @bridges.each do |bridge|
      @classes << bridge.grade
    end
  end

  # GET /marks/1
  # GET /marks/1.json
  def show
  end

  # GET /marks/new
  def new
    @mark = Mark.new
  end

  # GET /marks/1/edit
  def edit
  end

  # POST /marks
  # POST /marks.json
  def create
    @mark = Mark.new(mark_params)

    respond_to do |format|
      if @mark.save
        format.html { redirect_to marks_path, notice: 'Mark was successfully created.' }
        format.json { render :show, status: :created, location: @mark }
      else
        format.html { render :new }
        format.json { render json: @mark.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /marks/1
  # PATCH/PUT /marks/1.json
  def update
    respond_to do |format|
      if @mark.update(mark_params)
        format.html { redirect_to marks_path, notice: 'Mark was successfully updated.' }
        format.json { render :show, status: :ok, location: @mark }
      else
        format.html { render :edit }
        format.json { render json: @mark.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /marks/1
  # DELETE /marks/1.json
  def destroy
    @mark.destroy
    respond_to do |format|
      format.html { redirect_to marks_url, notice: 'Mark was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  def select_student
    @grade = Grade.find params[:grade_id]
    @employee = current_user
    @students = @grade.students
  end

  def select_subject_and_exam
    @class = Grade.find( params[:grade_id] )
    @main_grade = @class.parent if @class.present?

    @bridges = get_grade_bridges(current_user, @class.id) rescue []
    @subjects = []
    @bridges.each do |bridge|
      @subjects << bridge.subject
    end
    @subjects = @subjects.sort_by { |k| k.name }
    @exams = Exam.where(batch_id: @class.batch_id).order('name')
  end

  def enter_marks
    @class = Grade.find(params[:grade_id])
    @exam = Exam.find(params[:exam_id])
    @subject = Subject.find(params[:subject_id])
    if @class.students.present?
      @students = @class.students.sort_by { |k| k.fullname }
    end
    @main_grade = @class.parent if @class.present?
    @marks_divisions = @main_grade.grade_group.marks_divisions.order('name')
    @marks_division = @marks_divisions.first
    @marks_division = MarksDivision.find(params[:division_id]) if params[:division_id].present?


    @setting = ReportCardSetting.find_or_create_by(grade_id: @main_grade.id, batch_id: @class.batch_id) if @main_grade.present?
    @students.each do |std|
      ReportCard.find_or_create_by(student_id: std.id, grade_id: @class.id, setting_id_id: @setting.id)
    end
    check_marks_divisions(@setting, @marks_divisions)
    check_subjects(@setting, [@subject])
    check_exams(@setting, [@exam])
  end

  def select_marks_details
    @student = Student.find(params[:student_id])
    @report_card = ReportCard.find_or_create_by(student_id: @student.id, grade_id: @student.grade.id)
    @exams = Exam.where(batch_id: @student.grade.batch_id)
    @marks_divisions = @student.grade.parent.grade_group.marks_divisions if @student.grade.parent.present?
        @bridges = Bridge.where(grade_id: params[:grade_id], employee_id: params[:employee_id])
    @subjects = []
    @all_subjects = Subject.where(parent: nil).order('name')
    @all_subjects.each do |subject|
      @bridges.each do |bridge|
        @subjects << subject if subject.id == bridge.subject_id
      end
    end
    if @subjects.present? and @exams.present? and @marks_divisions.present? and @report_card.present?
      @mark = Mark.find_or_initialize_by(exam_id: @exams.first.id, subject_id: @subjects.first.id, division_id: @marks_divisions.first.id, report_card_id: @report_card.id)
      if @mark.new_record?
        @mark.total_marks = @marks_divisions.first.total_marks
        @mark.passing_marks = @marks_divisions.first.passing_marks
        @mark.save
      end
      @marks_division = MarksDivision.find(@mark.division_id)
      if @marks_division.sub_divisions.present?
        @marks_division.sub_divisions.each do |sub_division|
          @sessional = Sessional.find_or_initialize_by(name: sub_division.name, mark_id: @mark.id, sub_division_id: sub_division.id)
          if @sessional.new_record?
            @sessional.total_marks = sub_division.total_marks
            @sessional.save
            @mark.sessionals << @sessional
          end
        end
      end
    else
      flash[:notice] = 'Some Configurations Are Missing.'
    end
  end

  def save_marks
    @class = Grade.find(params[:class_id]) if params[:class_id].present?
    @exam = Exam.find(params[:exam_id]) if params[:exam_id].present?
    @subject = Subject.find(params[:subject_id]) if params[:subject_id].present?
    @marks_division = MarksDivision.find(params[:division_id]) if params[:division_id].present?

    @report_card_exam = ReportCardExam.find_by_exam(@exam) if @exam.present?
    @report_card_subject = ReportCardSubject.find_by_subject(@subject) if @subject.present?
    @report_card_division = ReportCardDivision.find_by_marks_division(@marks_division) if params[:division_id].present?

    @students = params[:sessionals]
    @dates = params[:sessionals_date]
    @students.each do |std|
      student = Student.find(std.first.to_i) rescue nil
      std_marks = std.last
      std_marks.each_with_index do |marks, index|
        puts "Processing: #{@marks_division.name} #{index}"
        if student.present?
          puts "Entering Marks For: #{student.fullname}"
          @report_card = ReportCard.find_by student_id: student.id, grade_id: @class.id
          @mark = Mark.find_or_initialize_by(report_card_id: @report_card.id, exam_id: @report_card_exam.id, subject_id: @report_card_subject.id, division_id: @report_card_division.id)
          @mark.save if @mark.new_record?
          @sessional = Sessional.find_or_create_by name: "#{@report_card_division.name} #{index}", mark_id: @mark.id
          @sessional.obtained_marks = marks.to_f
          @sessional.mark_date = @dates[index]
          @sessional.save
          puts '==================================='
          puts @sessional.inspect
          puts '==================================='
          @mark.obtained_marks = @mark.sessionals.average(:obtained_marks)
          @mark.passing_marks = @report_card_division.passing_marks
          @mark.total_marks = @report_card_division.total_marks
          @mark.save
        else
          flash[:notice] = 'Sorry, Something Bad Happened.'
          break
        end
      end
    end

    redirect_to enter_division_marks_path( @class.id, @subject.id, @exam.id, @marks_division.id)
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mark
      @mark = Mark.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def mark_params
      params.require(:mark).permit(:exam_id, :division_id, :subject_id, :report_card_id, :total_marks, :passing_marks, :obtained_marks,
                                   sessionals_attributes: [:id, :name, :obtained_marks])
    end
end
