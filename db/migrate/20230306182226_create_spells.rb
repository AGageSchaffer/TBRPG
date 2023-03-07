class CreateSpells < ActiveRecord::Migration[6.1]
  def change
    create_table :spells do |t|
      t.string :name
      t.integer :damage
      t.integer :healing
      t.integer :cost
      t.integer :lvl_requirement
      t.string :description
      t.string :damage_type
      t.integer :role_id

      t.timestamps
    end
  end
end
