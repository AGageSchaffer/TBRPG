# puts 'Creating Roles...'
# Role.create(
#     name: 'Warrior',
#     special: 'Taunt'
# )

# Role.create(
#     name: 'Wizard',
#     special: 'Spells'
# )

# Role.create(
#     name: 'Cleric',
#     special: 'Mass Heal'
# )

# Role.create(
#     name: 'Ranger',
#     special: 'Extra Attack'
# )

# puts 'Generating Stats...'
# Stat.create(
#     role_id: Role.find_by(name: 'Warrior').id,
#     health_points: 50,
#     mana: 0,
#     mana_regen: 0,
#     physical: 8,
#     magic: 0,
#     faith: 0
# )

# Stat.create(
#     role_id: Role.find_by(name: 'Wizard').id,
#     health_points: 30,
#     mana: 50,
#     mana_regen: 8,
#     physical: 0,
#     magic: 10,
#     faith: 0
# )

# Stat.create(
#     role_id: Role.find_by(name: 'Cleric').id,
#     health_points: 30,
#     mana: 50,
#     mana_regen: 8,
#     physical: 0,
#     magic: 0,
#     faith: 10
# )

# Stat.create(
#     role_id: Role.find_by(name: 'Ranger').id,
#     health_points: 40,
#     mana: 0,
#     mana_regen: 0,
#     physical: 10,
#     magic: 0,
#     faith: 0
# )

# puts 'Creating Characters...'

# Character.create(
#     user_id: 1,
#     name: 'Aelar',
#     level: 1,
#     experience: 0,
#     race: 'High Elf',
#     role_id: Role.find_by(name: 'Wizard').id,
#     targetable: true
# )

# Character.create(
#     user_id: 1,
#     name: 'Exiluur',
#     level: 1,
#     experience: 0,
#     race: 'Dragonborn',
#     role_id: Role.find_by(name: 'Warrior').id,
#     targetable: true
# )

# Character.create(
#     user_id: 1,
#     name: 'Olvarth',
#     level: 1,
#     experience: 0,
#     race: 'Human',
#     role_id: Role.find_by(name: 'Cleric').id,
#     targetable: true
# )

# Character.create(
#     user_id: 1,
#     name: 'Maleakas',
#     level: 1,
#     experience: 0,
#     race: 'Tiefling',
#     role_id: Role.find_by(name: 'Ranger').id,
#     targetable: true
# )

# puts "Done Seeding..."