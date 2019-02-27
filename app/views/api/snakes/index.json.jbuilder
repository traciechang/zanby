@snakes.each do |snake|
    json.set! snake.id do
        json.partial! "snake", snake: snake
    end
end