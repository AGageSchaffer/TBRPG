class Role < ApplicationRecord
    has_many :spells
    has_many :stats
    has_many :characters, through: :stats
    
    has_many :enemies
end
