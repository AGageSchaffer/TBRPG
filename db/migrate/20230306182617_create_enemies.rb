class CreateEnemies < ActiveRecord::Migration[6.1]
  def change
    create_table :enemies do |t|
      t.string :name
      t.string :race
      t.integer :enemy_party_id
      t.integer :role_id
      t.boolean :targetable

      t.timestamps
    end
  end
end
