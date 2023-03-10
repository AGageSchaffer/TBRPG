class CreateTurns < ActiveRecord::Migration[6.1]
  def change
    create_table :turns do |t|
      t.integer :battle_id
      t.boolean :player_attacking
      t.references :attacker, polymorphic: true
      t.references :target, polymorphic: true

      t.timestamps
    end
  end
end
