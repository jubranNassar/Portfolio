class SkillsController < ApplicationController
  def index
    Skill.all
  end
end
