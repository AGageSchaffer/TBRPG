class Character < ApplicationRecord
    belongs_to :role
    has_many :spells, through: :role
    has_one :stat, through: :role

    belongs_to :party

    has_many :turns
end
