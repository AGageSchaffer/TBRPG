class Battle < ApplicationRecord
    belongs_to :user
    belongs_to :party
    belongs_to :enemy_party
    has_many :characters, through: :user
    has_many :enemies, through: :enemy_party

    def shuffleInitiative
        initiative_order = characters + enemies
        initiative_order.shuffle()
    end
end
