class Api::SnakesController < ApplicationController
    def index
        @snakes = current_user.snakes
    end

    def show
        @snake = Snake.find(params[:id])
    end

    def create
    end

    def update
    end

    def delete
    end

    private
    # def snake_params
    #     params.require(:snake).permit()
    # end
end