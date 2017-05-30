class ChangePlayerColumnsToFloats < ActiveRecord::Migration[5.0]
  def change
    change_column :players, :age, :float
    change_column :players, :weight, :float
    change_column :players, :height, :float
    change_column :players, :minutes_played, :float
    change_column :players, :injuries, :float
    change_column :players, :strength_of_schedule, :float
    change_column :players, :position_injury, :float
    change_column :players, :severity_of_injury, :float
  end
end
