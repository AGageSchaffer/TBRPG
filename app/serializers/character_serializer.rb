class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :race, :level, :experience, :role, :party_id
end