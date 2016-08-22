class ContactsController < ApplicationController
  def index
    @contacts = Contact.all

  def create
    contact = Contact.new(contact_params)
    status = contact.save ? :ok : :unprocessable_entity
    render 'contacts/_contact', locals: { contact: contact }, status: status
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
