require 'rails_helper'

RSpec.describe User do
    let(:user) do
        User.new
    end

    describe 'validations' do
        it { is_expected.to validate_presence_of(:provider) }
        it { is_expected.to validate_presence_of(:uid) }
        it { is_expected.to validate_presence_of(:email) }
    end
end