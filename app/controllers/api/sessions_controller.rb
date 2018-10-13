class Api::SessionsController < ApplicationController
    def destroy
        if current_user
            logout
            render json: {}, status: :ok
        else
            render json: ["Please sign in."], status: 404
        end
    end
end
