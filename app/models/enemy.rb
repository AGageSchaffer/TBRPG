class Enemy < ApplicationRecord
    has_one :stat, as: :owner
    has_one :role, through: :stat
    
    belongs_to :enemy_party

    has_many :turns, as: :target
    has_many :turns, as: :attacker
end
