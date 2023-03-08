class CreateSprites < ActiveRecord::Migration[6.1]
  def change
    create_table :sprites do |t|
      t.string :imgsrc

      t.timestamps
    end
  end
end
