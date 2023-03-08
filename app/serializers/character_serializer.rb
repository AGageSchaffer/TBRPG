class CharacterSerializer < ActiveModel::Serializer
  attributes :id, :name, :race, :level, :experience, :role
end
