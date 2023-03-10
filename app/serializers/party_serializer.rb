class PartySerializer < ActiveModel::Serializer
  attributes :id, :user_id

  has_many :characters
end
