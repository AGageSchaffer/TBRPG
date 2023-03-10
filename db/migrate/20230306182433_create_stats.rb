class CreateStats < ActiveRecord::Migration[6.1]
  def change
    create_table :stats do |t|
      t.integer :level_up_threshold, default: 1000
      t.integer :health_points
      t.integer :max_health
      t.integer :mana
      t.integer :max_mana
      t.integer :mana_regen
      t.integer :magic
      t.integer :physical
      t.integer :faith
      t.integer :role_id
      t.references :owner, polymorphic: true

      t.timestamps
    end
  end
end
