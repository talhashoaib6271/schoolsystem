class Grade < ActiveRecord::Base
	belongs_to :batch
	has_many :bridges
	has_many :subjects ,through: :bridges
	has_many :students
	has_many :marks
	has_many :marksheets
end
