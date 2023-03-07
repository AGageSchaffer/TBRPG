class CreateStats < ActiveRecord::Migration[6.1]
  def change
    create_table :stats do |t|
      t.integer :health_points
      t.integer :mana
      t.integer :mana_regen
      t.integer :magic
      t.integer :physical
      t.integer :faith
      t.integer :role_id

      t.timestamps
    end
  end
end
