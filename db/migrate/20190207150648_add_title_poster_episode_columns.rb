class AddTitlePosterEpisodeColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :show_title, :string
    add_column :reviews, :poster_path, :string
    add_column :reviews, :episode_progress, :string

    add_index :reviews, :show_title
    add_index :reviews, :poster_path
    add_index :reviews, :episode_progress
  end
end