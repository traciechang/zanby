require 'rails_helper'

RSpec.describe User do
    let(:new_user) do
        User.create(provider: "gmail", uid: "testuid", email: "factorygurl@gmail.com")
    end

    describe 'validations' do
        subject { new_user }

        it { is_expected.to validate_presence_of(:provider) }
        it { is_expected.to validate_presence_of(:uid) }
        it { is_expected.to validate_presence_of(:email) }
        it { is_expected.to validate_uniqueness_of(:uid).scoped_to(:provider) }
    end
end