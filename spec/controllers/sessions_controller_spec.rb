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
        before do
            OmniAuth.config.test_mode = true

            OmniAuth.config.mock_auth[:google_oauth2] = OmniAuth::AuthHash.new({
                provider: 'google_oauth2',
                uid: '12345',
                info: {
                    email: 'pusheen@pusheencorp.com'
                }
            })
        end
        
        it "makes a post request" do
            get '/auth/google_oauth2/callback'
            expect(response.status).to eq(302)
        end

        it "creates a user" do
            expect(User.find_by_email('pusheen@pusheencorp.com')).to eq(nil)

            get '/auth/google_oauth2/callback'

            expect(User.find_by_email('pusheen@pusheencorp.com')).to_not eq(nil)
        end

        it "logs the user in" do
            expect(session[:user_id]).to eq(nil)
            get '/auth/google_oauth2/callback'
            expect(session[:user_id]).to_not eq(nil)
        end

        it "redirects to root after login" do
            get '/auth/google_oauth2/callback'
            expect(response).to redirect_to(root_url)
        end
    end

    describe 'DELETE destroy', type: :request do
        before do
            OmniAuth.config.test_mode = true

            OmniAuth.config.mock_auth[:google_oauth2] = OmniAuth::AuthHash.new({
                provider: 'google_oauth2',
                uid: '12345',
                info: {
                    email: 'pusheen@pusheencorp.com'
                }
            })
        end

        it "logs the user out" do
            get '/auth/google_oauth2/callback'
            expect(session[:user_id]).to_not eq(nil)
            delete session_url
            expect(session[:user_id]).to eq(nil)
        end
    end
end