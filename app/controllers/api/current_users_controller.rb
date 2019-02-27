class Api::CurrentUsersController < ApplicationController
    before_action :ensure_logged_in, only: [:show]

    def show
        render json: current_user
    end
end