class CreateContacts < ActiveRecord::Migration[5.0]
  def change
    create_table :contacts do |t|
      t.string :address
      t.string :city
      t.string :email
      t.string :name
      t.string :phone
      t.string :postal_code
      t.string :state
      t.string :title

      t.timestamps
    end
  end
end
