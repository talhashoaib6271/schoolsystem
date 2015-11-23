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

  def check_marks_division(setting, marks_divisions)
    if setting.marks_divisions.present? and marks_divisions.present?
      marks_divisions.each do |division|
        if setting.marks_divisions.where(name: division).nil?
          setting.marks_divisions << ReportCardDivision.new(name: division.name, total_marks: division.total_marks, passing_marks: division.passing_marks)
        end
      end
    else
      marks_divisions.each do |division|
        setting.marks_divisions << ReportCardDivision.new(name: division.name, total_marks: division.total_marks, passing_marks: division.passing_marks)
      end
    end
  end

end
