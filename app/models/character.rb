class Character < ApplicationRecord
    belongs_to :role
    has_many :spells, through: :role
    has_one :stat, through: :role
    has_one :sprite
    has_one :party

    has_many :turns
    belongs_to :user
end
