class ProjectsController < ApplicationController
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
    params.require(:project).permit(:name, :image, :github_url, :deployed_url, :description)
  end

  def get_project
    @project = Project.find(params[:id])
  end
end
