require 'test_helper'

class ContactsControllerTest < ActionDispatch::IntegrationTest
  test 'index' do
    get contacts_url
    assert_response :success
  end

  test 'create invalid' do
    assert_no_difference 'Contact.count' do
      post contacts_url, params: { contact: { name: '' }, format: :json }
    end
    assert_response :unprocessable_entity
  end

  test 'create valid' do
    assert_difference 'Contact.count' do
      post contacts_url, params: { contact: { name: 'Billie Bluejeans' }, format: :json }
    end
    assert_response :ok
  end
end
