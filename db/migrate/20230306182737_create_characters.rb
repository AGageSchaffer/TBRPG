class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :level
      t.integer :experience
      t.string :race
      t.integer :party_id, default: 0
      t.integer :role_id
      t.integer :item_id
      t.integer :sprite_id
      t.boolean :targetable, default: true
      t.integer :initiative, default: 0
      t.boolean :is_dead, default: false
      t.integer :user_id

      t.timestamps
    end
  end
end
