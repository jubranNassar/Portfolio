class ProjectsController < ApplicationController
  before_action :get_project, only: %i[show update destroy]
  before_action :authorize_request, only: %i[create update destroy]

  def index
    projects = Project.all
    render json: projects
  end

  def show
    render json: @project
  end

  def create
    project = Project.new(project_params)
    if project.save
      render json: project
    else
      render json: 'Error, try again'
    end
  end

  def update
    if @project.update(project_params)
      render json: @project
    else
      render json: 'Error, try again'
    end
  end

  def destroy
    if @project.destroy
      render json: 'Deleted'
    else
      render json: 'Error, try again'
    end
  end

  private

  def project_params
    params.require(:project).permit(:name, :image, :github_url, :deployed_url, :description, :user_id)
  end

  def get_project
    @project = Project.find(params[:id])
  end
end
