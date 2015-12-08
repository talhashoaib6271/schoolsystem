class ReportCardSetting < ActiveRecord::Base
  has_many :subjects, class_name: 'ReportCardSubject', foreign_key: 'setting_id'
  has_many :exams, class_name: 'ReportCardExam', foreign_key: 'setting_id'
  has_many :marks_divisions, class_name: 'ReportCardDivision', foreign_key: 'setting_id', dependent: :destroy
  accepts_nested_attributes_for :marks_divisions, reject_if: :all_blank, allow_destroy: true

  has_many :headings, class_name: 'ReportCardHeading', foreign_key: 'setting_id', dependent: :destroy
  accepts_nested_attributes_for :headings, reject_if: :all_blank, allow_destroy: true

  belongs_to :grade
  belongs_to :batch
  belongs_to :exam
end
