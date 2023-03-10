class CreateBattles < ActiveRecord::Migration[6.1]
  def change
    create_table :battles do |t|
      t.integer :user_id
      t.integer :party_id
      t.integer :enemy_party_id

      t.timestamps
    end
  end
end
