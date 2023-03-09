class CreateCampaigns < ActiveRecord::Migration[6.1]
  def change
    create_table :campaigns do |t|
      t.integer :user_id
      t.integer :battle, default: 1

      t.timestamps
    end
  end
end
