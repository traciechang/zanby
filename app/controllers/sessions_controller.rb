class SessionsController < ApplicationController
    skip_before_action :ensure_logged_in, only: [:new, :create]
    before_action :ensure_not_logged_in, only: [:new, :create]

    def new
    end

    def create
        user = User.find_or_create_from_auth_hash(request.env["omniauth.auth"])
        login(user)
        redirect_to root_url
    end

    def destroy
        logout
        redirect_to login_url
    end
end
