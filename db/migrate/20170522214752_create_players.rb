class CreatePlayers < ActiveRecord::Migration[5.0]
  def change
    create_table :players do |t|
      t.string :name
      t.string :position
      t.string :school
      t.integer :age
      t.integer :weight
      t.string :height
      t.string :minutes_played
      t.string :injuries
      t.integer :strength_of_schedule
      t.string :position_injury
      t.string :severity_of_injury
      t.timestamps
    end
  end
end
