# == Schema Information
#
# Table name: reviews
#
#  id               :bigint(8)        not null, primary key
#  user_id          :integer          not null
#  show_id          :integer          not null
#  date_watched     :date
#  season_progress  :string
#  body             :text
#  score            :integer
#  like             :boolean
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  show_title       :string
#  poster_path      :string
#  episode_progress :string
#

class Review < ApplicationRecord

    belongs_to :user
    
end
