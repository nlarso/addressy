json.key_format! camelize: :lower

json.extract!(contact, *[
  :address,
  :city,
  :email,
  :id,
  :name,
  :phone,
  :postal_code,
  :state,
  :title
])

if contact.errors.any?
  json.errors contact.errors.messages
end
