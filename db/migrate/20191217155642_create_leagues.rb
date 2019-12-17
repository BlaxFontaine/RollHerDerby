class CreateLeagues < ActiveRecord::Migration[6.0]
  def change
    create_table :leagues do |t|
      t.string :name
      t.string :country
      t.string :city
      t.float :lat
      t.float :lng
      t.string :logo
      t.string :region

      t.timestamps
    end
  end
end
