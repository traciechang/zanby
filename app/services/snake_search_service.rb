class SnakeSearchService
    def initialize(
        id: "",
        name: "",
        species: Snake::SPECIES,
        year: "",
        sex: Snake::SEX
    )

        @id = id
        @name = name
        @species = species
        @year = year
        @sex = sex
    end

    attr_reader :id, :name, :species, :year, :sex
    
    def call
        snake_ids = Snake.
            with_custom_id(id).
            with_name(name).
            with_species(species).
            with_year(year).
            with_sex(sex).ids

        # Snake.where(id: snake_ids)
    end
end