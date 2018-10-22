require 'rails_helper'

RSpec.describe SessionsController, type: :controller do
    render_views

    describe 'GET new' do
        it "returns a 200 status code" do
            get :new
            expect(response.status).to eq(200)
        end

        it "contains the correct text" do
            get :new
            expect(response.body).to include("Sign in with Google")
        end
    end

    describe 'POST create', type: :request do
        it "makes a post request" do
            OmniAuth.config.test_mode = true

            OmniAuth.config.mock_auth[:google_oauth2] = OmniAuth::AuthHash.new({
                provider: 'google_oauth2',
                uid: '12345',
                info: {
                    email: 'pusheen@pusheencorp.com'
                }
            })

            get '/auth/google_oauth2/callback'
            expect(response.status).to eq(302)
        end
    end

    describe 'DELETE destroy' do
    end
end