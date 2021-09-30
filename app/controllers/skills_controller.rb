class SkillsController < ApplicationController
  before_action :get_skill, only: %i[update destroy]

  def index
    render json: Skill.all
  end

  def create
    skill = Skill.new(skill_params)
    if skill.save
      render json: skill
    else
      render json: 'Error, try again'
    end
  end

  def update
    if @skill.update(skill_params)
      render json: @skill
    else
      render json: 'Error, try again'

    end
  end

  def destroy
    if @skill.destroy
      render json: 'Deleted'
    else
      render json: 'Error, please try again'
    end
  end

  private

  def skill_params
    params.require(:skill).permit(:name, :image_url, :user_id)
  end

  def get_skill
    @skill = Skill.find(params[:id])
  end
end
