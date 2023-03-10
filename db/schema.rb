# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2023_03_08_230722) do

  create_table "battles", force: :cascade do |t|
    t.integer "user_id"
    t.integer "party_id"
    t.integer "enemy_party_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "campaigns", force: :cascade do |t|
    t.integer "user_id"
    t.integer "battle", default: 1
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
    t.integer "level"
    t.integer "experience"
    t.string "race"
    t.integer "party_id", default: 0
    t.integer "role_id"
    t.integer "item_id"
    t.integer "sprite_id"
    t.boolean "targetable", default: true
    t.integer "initiative", default: 0
    t.boolean "is_dead", default: false
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "enemies", force: :cascade do |t|
    t.string "name"
    t.string "race"
    t.integer "enemy_party_id"
    t.integer "role_id"
    t.integer "sprite_id"
    t.boolean "targetable", default: true
    t.integer "initiative", default: 0
    t.boolean "is_dead", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "enemy_parties", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "inventories", force: :cascade do |t|
    t.integer "user_id"
    t.integer "item_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "items", force: :cascade do |t|
    t.string "name"
    t.integer "damage"
    t.string "weapon_type"
    t.string "rarity"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "parties", force: :cascade do |t|
    t.string "name"
    t.integer "user_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "roles", force: :cascade do |t|
    t.string "name"
    t.string "special"
    t.integer "level_up_threshold", default: 1000
    t.integer "health_points"
    t.integer "max_health"
    t.integer "mana"
    t.integer "max_mana"
    t.integer "mana_regen"
    t.integer "magic"
    t.integer "physical"
    t.integer "faith"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "shop_items", force: :cascade do |t|
    t.integer "shop_id"
    t.integer "item_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "shops", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "spells", force: :cascade do |t|
    t.string "name"
    t.integer "damage"
    t.integer "healing"
    t.integer "cost"
    t.integer "lvl_requirement"
    t.string "description"
    t.string "damage_type"
    t.integer "role_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "sprites", force: :cascade do |t|
    t.string "imgsrc"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "stats", force: :cascade do |t|
    t.integer "level_up_threshold", default: 1000
    t.integer "health_points"
    t.integer "max_health"
    t.integer "mana"
    t.integer "max_mana"
    t.integer "mana_regen"
    t.integer "magic"
    t.integer "physical"
    t.integer "faith"
    t.integer "role_id"
    t.string "owner_type"
    t.integer "owner_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["owner_type", "owner_id"], name: "index_stats_on_owner"
  end

  create_table "turns", force: :cascade do |t|
    t.integer "battle_id"
    t.boolean "player_attacking"
    t.string "attacker_type"
    t.integer "attacker_id"
    t.string "target_type"
    t.integer "target_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["attacker_type", "attacker_id"], name: "index_turns_on_attacker"
    t.index ["target_type", "target_id"], name: "index_turns_on_target"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.integer "currency"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
