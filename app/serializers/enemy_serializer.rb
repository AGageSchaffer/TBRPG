class EnemySerializer < ActiveModel::Serializer
  attributes :id, :name, :race, :enemy_party_id, :role_id, :sprite_id, :targetable, :stat, :role
end
