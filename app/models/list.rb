# == Schema Information
#
# Table name: lists
#
#  id          :bigint(8)        not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class List < ApplicationRecord
    validates :title, presence: true
    validates_uniqueness_of :title, :scope => [:user_id]

    belongs_to :user

    has_many :listings
end
