class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :race, :level, :experience, :party_id, :sprite_id, :stat, :role
end
