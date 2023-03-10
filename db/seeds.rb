puts 'Creating Roles...'
Role.create(
    name: 'Warrior',
    special: 'Taunt',
    level_up_threshold: 1000,
    health_points: 50,
    max_health: 50,
    mana: 0,
    max_mana: 0,
    mana_regen: 0,
    magic: 0,
    physical: 8,
    faith: 0,
)

Role.create(
    name: 'Wizard',
    special: 'Fireball',
    level_up_threshold: 1000,
    health_points: 30,
    max_health: 30,
    mana: 50,
    max_mana: 50,
    mana_regen: 8,
    magic: 15,
    physical: 0,
    faith: 0,
)

Role.create(
    name: 'Cleric',
    special: 'Mass Heal',
    level_up_threshold: 1000,
    health_points: 30,
    max_health: 30,
    mana: 50,
    max_mana: 50,
    mana_regen: 8,
    magic: 0,
    physical: 0,
    faith: 8,
)

Role.create(
    name: 'Ranger',
    special: 'Extra Attack',
    level_up_threshold: 1000,
    health_points: 40,
    max_health: 40,
    mana: 0,
    max_mana: 0,
    mana_regen: 0,
    magic: 0,
    physical: 15,
    faith: 0,
)

puts 'Creating Characters...'

Character.create(
    user_id: 1,
    name: 'Aelar',
    level: 1,
    experience: 0,
    race: 'High Elf',
    role_id: Role.find_by(name: 'Wizard').id,
    sprite_id: 13
)

Character.create(
    user_id: 1,
    name: 'Exiluur',
    level: 1,
    experience: 0,
    race: 'Dragonborn',
    role_id: Role.find_by(name: 'Warrior').id,
    sprite_id: 3
)

Character.create(
    user_id: 1,
    name: 'Olvarth',
    level: 1,
    experience: 0,
    race: 'Human',
    role_id: Role.find_by(name: 'Cleric').id,
    sprite_id: 21
)

Character.create(
    user_id: 1,
    name: 'Maleakas',
    level: 1,
    experience: 0,
    race: 'Tiefling',
    role_id: Role.find_by(name: 'Ranger').id,
    sprite_id: 38
)

puts 'Generating Enemy Parties...'

EnemyParty.create(
    name: 'Orc Band 1'
)

EnemyParty.create(
    name: 'Orc Band 2'
)

EnemyParty.create(
    name: 'Orc Band 3'
)
puts 'Clearing Old Enemy Data...'
# Enemy.destroy_all

puts 'Generating Enemies...'

Enemy.create(
    name: 'Orc 1',
    race: 'Orc',
    enemy_party_id: 1,
    sprite_id: 1,
    role_id: Role.find_by(name: 'Warrior').id
)

Enemy.create(
    name: 'Orc 2',
    race: 'Orc',
    enemy_party_id: 1,
    sprite_id: 1,
    role_id: Role.find_by(name: 'Warrior').id
)

Enemy.create(
    name: 'Orc 3',
    race: 'Orc',
    enemy_party_id: 1,
    sprite_id: 1,
    role_id: Role.find_by(name: 'Warrior').id
)

Enemy.create(
    name: 'Orc Ranger',
    race: 'Orc',
    enemy_party_id: 1,
    sprite_id: 2,
    role_id: Role.find_by(name: 'Ranger').id
)

puts 'Generating Stats...'
Stat.create(
    owner: Character.find(2),
    role_id: Role.find_by(name: 'Warrior').id,
    level_up_threshold: 1000,
    health_points: 50,
    max_health: 50,
    mana: 0,
    max_mana: 0,
    mana_regen: 0,
    physical: 8,
    magic: 0,
    faith: 0
)

Stat.create(
    owner: Character.find(1),
    role_id: Role.find_by(name: 'Wizard').id,
    level_up_threshold: 1000,
    health_points: 30,
    max_health: 30,
    mana: 50,
    max_mana: 50,
    mana_regen: 8,
    physical: 0,
    magic: 15,
    faith: 0
)

Stat.create(
    owner: Character.find(3),
    role_id: Role.find_by(name: 'Cleric').id,
    level_up_threshold: 1000,
    health_points: 30,
    max_health: 30,
    mana: 50,
    max_mana: 50,
    mana_regen: 8,
    physical: 0,
    magic: 0,
    faith: 10
)

Stat.create(
    owner: Character.find(4),
    role_id: Role.find_by(name: 'Ranger').id,
    level_up_threshold: 1000,
    health_points: 40,
    max_health: 40,
    mana: 0,
    max_mana: 0,
    mana_regen: 0,
    physical: 15,
    magic: 0,
    faith: 0
)

Stat.create(
    owner: Enemy.find(1),
    role_id: Role.find_by(name: 'Warrior').id,
    health_points: 50,
    max_health: 50,
    mana: 0,
    max_mana: 0,
    mana_regen: 0,
    physical: 10,
    magic: 0,
    faith: 0
)

Stat.create(
    owner: Enemy.find(2),
    role_id: Role.find_by(name: 'Warrior').id,
    health_points: 50,
    max_health: 50,
    mana: 0,
    max_mana: 0,
    mana_regen: 0,
    physical: 8,
    magic: 0,
    faith: 0
)

Stat.create(
    owner: Enemy.find(3),
    role_id: Role.find_by(name: 'Warrior').id,
    health_points: 50,
    max_health: 50,
    mana: 0,
    max_mana: 0,
    mana_regen: 0,
    physical: 8,
    magic: 0,
    faith: 0
)

Stat.create(
    owner: Enemy.find(4),
    role_id: Role.find_by(name: 'Ranger').id,
    health_points: 50,
    max_health: 50,
    mana: 0,
    max_mana: 0,
    mana_regen: 0,
    physical: 10,
    magic: 0,
    faith: 0
)

puts "Done Seeding..."