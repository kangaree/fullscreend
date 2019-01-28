class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :show_id
      t.date :date_watched
      t.string :season_progress
      t.text :body
      t.integer :score
      t.boolean :like

      t.timestamps
    end
    add_index :reviews, :user_id
    add_index :reviews, :show_id
    add_index :reviews, :date_watched
    add_index :reviews, :season_progress
    add_index :reviews, :body
    add_index :reviews, :score
    add_index :reviews, :like
  end
end
