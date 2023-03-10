class BattleSerializer < ActiveModel::Serializer
  attributes :id

  belongs_to :user
  belongs_to :party
  belongs_to :enemy_party
  has_many :characters
  has_many :enemies
end
