require 'test_helper'

class ContactsControllerTest < ActionDispatch::IntegrationTest
  test 'index' do
    get contacts_url
    assert_response :success
  end
end
