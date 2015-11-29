module MarksHelper

  def get_employee_bridges(current_user)
    bridges = []
    grades = Grade.where(section: nil).order('name')
    if current_user.role.rights.where(value: 'enter_all_marks').any?
      grades.each do |grade|
        subgrades = Grade.where('name=? AND section IS NOT NULL', grade.name).order('section')
        subgrades.each do |sub_grade|
          bridge = Bridge.where(grade_id: sub_grade.id).try(:first)
          bridges << bridge if bridge.present?
        end
      end
    else
      grades.each do |grade|
        subgrades = Grade.where('name=? AND section IS NOT NULL', grade.name).order('section')
        subgrades.each do |sub_grade|
          bridge = Bridge.where(grade_id: sub_grade.id, employee_id: (Employee.find_by_email(current_user.email) || current_user).id ).try(:first)
          bridges << bridge if bridge.present?
        end
      end
    end
    bridges
  end

  def get_grade_bridges(current_user, grade_id)
    if current_user.role.rights.where(value: 'enter_all_marks').any?
      bridges = Bridge.where(grade_id: grade_id)
    else
      bridges = Bridge.where(grade_id: grade_id, employee_id: (Employee.find_by_email(current_user.email) || current_user).id )
    end
    bridges
  end

  def check_marks_divisions(setting, marks_divisions)
    if marks_divisions.present?
      if setting.marks_divisions.present?
        marks_divisions.each do |division|
          if setting.marks_divisions.where(name: division.name).nil?
            setting.marks_divisions << ReportCardDivision.new(name: division.name, total_marks: division.total_marks, passing_marks: division.passing_marks, is_divisible: division.is_divisible)
          end
        end
      else
        marks_divisions.each do |division|
          setting.marks_divisions << ReportCardDivision.new(name: division.name, total_marks: division.total_marks, passing_marks: division.passing_marks, is_divisible: division.is_divisible)
        end
      end
    end
  end

  def check_subjects(setting, subjects)
    if subjects.present?
      if setting.subjects.present?
        subjects.each do |subject|
          if setting.subjects.where(name: subject.name, code: subject.code).nil?
            parent = Subject.find(subject.parent_id) if subject.parent_id.present?
            report_card_parent = ReportCardSubject.find_or_create_by(name: parent.name, code: parent.code) if parent.present?
            setting.subjects << ReportCardSubject.new(name: subject.name, code: subject.code, parent_id: report_card_parent.try(:id), weight: report_card_parent.try(:weight))
          end
        end
      else
        subjects.each do |subject|
          parent = Subject.find(subject.parent_id) if subject.parent_id.present?
          report_card_parent = ReportCardSubject.find_or_create_by(name: parent.name, code: parent.code) if parent.present?
          setting.subjects << ReportCardSubject.new(name: subject.name, code: subject.code, parent_id: report_card_parent.try(:id), weight: report_card_parent.try(:weight))
        end
      end
    end
  end

  def check_exams(setting, exams)
    if exams.present?
      if setting.exams.present?
        exams.each do |exam|
          if setting.exams.where(name: exam.name, batch_id: exam.batch_id).nil?
            setting.exams << ReportCardExam.new(name: exam.name, batch_id: exam.batch_id)
          end
        end
      else
        exams.each do |exam|
          setting.exams << ReportCardExam.new(name: exam.name, batch_id: exam.batch_id)
        end
      end
    end
  end

  def get_all_employee_bridges(current_user)
      bridges = []
      grades = Grade.where(section: nil).order('name')
      if current_user.role.rights.where(value: 'enter_all_marks').any?
        grades.each do |grade|
          subgrades = Grade.where('name=? AND section IS NOT NULL', grade.name).order('section')
          subgrades.each do |sub_grade|
            sub_bridges = Bridge.where(grade_id: sub_grade.id)
            bridges = bridges + sub_bridges if sub_bridges.present?
          end
        end
      else
        grades.each do |grade|
          subgrades = Grade.where('name=? AND section IS NOT NULL', grade.name).order('section')
          subgrades.each do |sub_grade|
            sub_bridges = Bridge.where(grade_id: sub_grade.id, employee_id: (Employee.find_by_email(current_user.email) || current_user).id )
            bridges = bridges + sub_bridges if sub_bridges.present?
          end
        end
      end
      bridges
  end

end
