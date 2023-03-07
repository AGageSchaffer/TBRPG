class CreateTurns < ActiveRecord::Migration[6.1]
  def change
    create_table :turns do |t|
      t.integer :battle_id
      t.integer :character_id
      t.integer :enemy_id

      t.timestamps
    end
  end
end
