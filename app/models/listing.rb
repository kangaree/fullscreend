# == Schema Information
#
# Table name: listings
#
#  id          :bigint(8)        not null, primary key
#  list_id     :integer          not null
#  show_id     :integer          not null
#  note        :string
#  show_title  :string           not null
#  poster_path :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Listing < ApplicationRecord
    validates_uniqueness_of :list_id, :scope => [:show_id]

    belongs_to :list
end