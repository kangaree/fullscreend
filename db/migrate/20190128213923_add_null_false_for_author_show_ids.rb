class AddNullFalseForAuthorShowIds < ActiveRecord::Migration[5.2]
  def change
    change_column_null :reviews, :user_id, false
    change_column_null :reviews, :show_id, false
  end
end
