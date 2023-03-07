class CreateCharacters < ActiveRecord::Migration[6.1]
  def change
    create_table :characters do |t|
      t.string :name
      t.integer :experience
      t.string :race
      t.integer :party_id
      t.integer :role_id
      t.integer :item_id
      t.boolean :targetable

      t.timestamps
    end
  end
end
