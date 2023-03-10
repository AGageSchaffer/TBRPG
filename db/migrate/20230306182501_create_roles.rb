class CreateRoles < ActiveRecord::Migration[6.1]
  def change
    create_table :roles do |t|
      t.string :name
      t.string :special
      t.integer :level_up_threshold, default: 1000
      t.integer :health_points
      t.integer :max_health
      t.integer :mana
      t.integer :max_mana
      t.integer :mana_regen
      t.integer :magic
      t.integer :physical
      t.integer :faith

      t.timestamps
    end
  end
end
