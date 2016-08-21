class Contact < ApplicationRecord
  validates :name, presence: true
  validates :email,
    allow_blank: true,
    format: { with: /\A\S*@\S*\.\S*\z/ },
    uniqueness: true
end
