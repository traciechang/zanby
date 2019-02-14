class CreateSnakes < ActiveRecord::Migration[5.1]
  def change
    create_table :snakes do |t|
      t.integer :user_id, null: false
      t.string :custom_id, null: false
      t.string :name
      t.string :species
      t.string :common_name
      t.string :locality
      t.string :morph
      t.date :date_of_birth
      t.date :date_of_death
      t.string :sex
      t.string :produced_by
      t.string :acquired_from
      t.date :date_acquired
      t.date :date_transferred
      t.text :notes
      t.boolean :for_sale, null: false, default: false
      t.string :image_url
      t.boolean :active, null: false, default: true

      t.timestamps
    end
  end
end
