class CreateEnemyParties < ActiveRecord::Migration[6.1]
  def change
    create_table :enemy_parties do |t|
      t.string :name

      t.timestamps
    end
  end
end
