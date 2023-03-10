class TurnSerializer < ActiveModel::Serializer
  attributes :id, :battle_id, :player_attacking

  belongs_to :attacker
  belongs_to :target
end
