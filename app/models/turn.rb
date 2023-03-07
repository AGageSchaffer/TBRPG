class Turn < ApplicationRecord
    belongs_to :character
    belongs_to :enemy
    belongs_to :battle
end
