# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_05_11_021138) do

  create_table "entries", force: :cascade do |t|
    t.integer "user_id"
    t.integer "mood"
    t.boolean "meditation"
    t.boolean "workout"
    t.boolean "social"
    t.boolean "creative"
    t.integer "weather"
    t.date "date"
    t.integer "sleep"
    t.index ["user_id"], name: "index_entries_on_user_id"
  end

  create_table "user", force: :cascade do |t|
    t.string "name"
    t.string "username"
  end

end