class Character < ApplicationRecord
    has_one :stat, as: :owner
    has_one :role, through: :stat
    has_one :sprite
    has_one :party

    has_many :turns, as: :attacker
    has_many :turns, as: :target
    belongs_to :user
end
