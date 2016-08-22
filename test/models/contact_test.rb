require 'test_helper'

class ContactTest < ActiveSupport::TestCase
  should validate_presence_of(:name)
  should validate_uniqueness_of(:email).allow_nil
  should allow_value('test@example.com').for(:email)
  should_not allow_value('this-is-not-an-email-address').for(:email)
end
