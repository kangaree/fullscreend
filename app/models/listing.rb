class Listing < ApplicationRecord
    validates_uniqueness_of :list_id, :scope => [:show_id]

    belongs_to :list
end