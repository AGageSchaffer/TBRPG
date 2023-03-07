class CreateItems < ActiveRecord::Migration[6.1]
  def change
    create_table :items do |t|
      t.string :name
      t.integer :damage
      t.string :weapon_type
      t.string :rarity

      t.timestamps
    end
  end
end
