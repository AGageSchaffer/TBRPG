class CreateEnemies < ActiveRecord::Migration[6.1]
  def change
    create_table :enemies do |t|
      t.string :name
      t.string :race
      t.integer :enemy_party_id
      t.integer :role_id
      t.integer :sprite_id
      t.boolean :targetable, default: true
      t.integer :initiative, default: 0
      t.boolean :is_dead, default: false

      t.timestamps
    end
  end
end
