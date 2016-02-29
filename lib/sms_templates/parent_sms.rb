require 'mustache'

class ParentSms < Mustache
  self.path = File.dirname(__FILE__)

  def initialize(parent=nil)
    @parent = parent
  end

  def parent
    @parent
  end

end