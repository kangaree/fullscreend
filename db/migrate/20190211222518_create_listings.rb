class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.integer :list_id, null: false
      t.integer :show_id, null: false
      t.string :note
      t.string :show_title, null: false
      t.string :poster_path

      t.timestamps
    end

    add_index :listings, [:list_id, :show_id], unique: true
    add_index :listings, :show_id
  end
end
