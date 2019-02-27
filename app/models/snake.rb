class Snake < ApplicationRecord
    SPECIES = ["Boa constrictor constrictor", "Python brongersmai", "Python curtus"]
    SEX = %w(Male Female)

    validates :user_id, :custom_id, :active, presence: true
    validates :for_sale, inclusion: { in: [true, false] }

    belongs_to :user

    # scope :with_custom_id, -> (custom_id) {
    #     Snake.where("LOWER(custom_id) = ?", "#{custom_id.downcase}")
    # }

    # scope :with_name, -> (name) {
    #     Snake.where("LOWER(name) LIKE ?", "%#{name.downcase}%")
    # }

    # scope :with_species, -> (species) {
    #     Snake.where(species: species)
    # }

    # scope :with_sex, -> (sex) {
    #     Snake.where(sex: sex)
    # }
end