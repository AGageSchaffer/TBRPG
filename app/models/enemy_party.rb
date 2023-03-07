class EnemyParty < ApplicationRecord
    has_many :enemies
    has_many :battles
end
