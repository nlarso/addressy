20.times do
  Contact.create({
    name: FFaker::Name.name,
    title: FFaker::Job.title,
    email: FFaker::Internet.email,
    phone: FFaker::PhoneNumber.short_phone_number,
    address: FFaker::AddressUS.street_address,
    city: FFaker::AddressUS.city,
    state: FFaker::AddressUS.state_abbr,
    postal_code: FFaker::AddressUS.zip_code
  })
end
