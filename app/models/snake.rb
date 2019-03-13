class Snake < ApplicationRecord
    SPECIES = ["Boa constrictor constrictor", "Python brongersmai", "Python curtus"]
    SEX = %w(Male Female)

    validates :user_id, :custom_id, :active, presence: true
    validates :for_sale, inclusion: { in: [true, false] }

    belongs_to :user

    scope :with_custom_id, -> (custom_id) {
        if custom_id != ""
            Snake.where("LOWER(custom_id) = ?", "#{custom_id.downcase}")
        end
    }

    scope :with_name, -> (name) {
        if name != ""
            Snake.where("LOWER(name) LIKE ?", "%#{name.downcase}%")
        end
    }

    scope :with_species, -> (species) {
        Snake.where(species: species)
    }

    scope :with_sex, -> (sex) {
        Snake.where(sex: sex)
    }

    scope :with_year, -> (year) {
        if year != ""
            year_str = year.to_s
            start_date = "1/1/#{year_str}".to_date
            last_date = "31/12/#{year_str}".to_date
            Snake.where('date_of_birth >= ? AND date_of_birth <= ?', start_date, last_date)
        # else
        #     []
        end
    }
end