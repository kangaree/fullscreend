class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.integer :user_id, null: false
      t.string :title, null: false
      t.text :description

      t.timestamps
    end
    add_index :lists, [:title, :user_id], unique: true
    add_index :lists, :user_id
  end
end
