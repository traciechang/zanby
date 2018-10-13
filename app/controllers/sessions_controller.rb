class SessionsController < ApplicationController
    skip_before_action :ensure_current_user

    def new
    end

    def create
        user = User.find_or_create_from_auth_hash(request.env["omniauth.auth"])
        login(user)
        redirect_to home_url
    end
end
