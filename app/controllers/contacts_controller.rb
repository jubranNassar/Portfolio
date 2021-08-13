class ContactsController < ApplicationController
  before_action :get_contact, only: %i[show update destroy]

  def index
    contacts = Contact.all
    render json: contacts
  end

  def show
    render json: @contact
  end

  def create
    new = Contact.new(contact_params)
    if new.save
      render json: new
    else
      render json: 'Error'
    end
  end

  def update
    render json: @contact if @contact.update(contact_params)
  end

  def destroy
    render json: 'Deleted' if @contact.destroy
  end

  private

  def contact_params
    params.require(:contact).permit(:email, :message)
  end

  def get_contact
    @contact = Contact.find(params[:id])
  end
end
