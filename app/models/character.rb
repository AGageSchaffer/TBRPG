class Character < ApplicationRecord
    has_one :stat, as: :owner
    has_one :role, through: :stat
    has_one :sprite
    has_one :party

    has_many :turns
    belongs_to :user
end
