require_relative '../../services/snake_search_service'

class Api::SnakesController < ApplicationController
    def index
        # @snakes = current_user.snakes

        snake_ids = SnakeSearchService.new(snake_search_params.to_h.symbolize_keys).call
        @snakes = current_user.snakes.where(id: snake_ids)
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

    def snake_search_params
        params.permit(:id, :name, :year, :sex, :species)
    end
end