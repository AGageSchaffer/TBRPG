class Party < ApplicationRecord
    has_many :characters
    has_many :battles
    belongs_to :user
end
