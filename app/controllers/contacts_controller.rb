class ContactsController < ApplicationController
  def index
    @contacts = Contact.all.order(created_at: :desc)
  end

  def create
    contact = Contact.new(contact_params)
    status = contact.save ? :ok : :unprocessable_entity
    render 'contacts/_contact', locals: { contact: contact }, status: status
  end

  def update
    contact = Contact.find(params[:id])
    status = contact.update(contact_params) ? :ok : :unprocessable_entity
    render 'contacts/_contact', locals: { contact: contact }, status: status
  end

  def destroy
    contact = Contact.find(params[:id])
    contact.destroy
    render json: { status: :ok }
  end

  private

  def contact_params
    params.require(:contact).permit(*[
      :address,
      :city,
      :email,
      :name,
      :phone,
      :postal_code,
      :state,
      :title
    ])
  end
end
