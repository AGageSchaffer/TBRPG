class Battle < ApplicationRecord
    belongs_to :party
    belongs_to :enemy_party
end
