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

ActiveRecord::Schema.define(version: 2019_02_11_222518) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "listings", force: :cascade do |t|
    t.integer "list_id", null: false
    t.integer "show_id", null: false
    t.string "note"
    t.string "show_title", null: false
    t.string "poster_path"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["list_id", "show_id"], name: "index_listings_on_list_id_and_show_id", unique: true
    t.index ["show_id"], name: "index_listings_on_show_id"
  end

  create_table "lists", force: :cascade do |t|
    t.integer "user_id", null: false
    t.string "title", null: false
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["title", "user_id"], name: "index_lists_on_title_and_user_id", unique: true
    t.index ["user_id"], name: "index_lists_on_user_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "show_id", null: false
    t.date "date_watched"
    t.string "season_progress"
    t.text "body"
    t.integer "score"
    t.boolean "like"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "show_title"
    t.string "poster_path"
    t.string "episode_progress"
    t.index ["body"], name: "index_reviews_on_body"
    t.index ["date_watched"], name: "index_reviews_on_date_watched"
    t.index ["episode_progress"], name: "index_reviews_on_episode_progress"
    t.index ["like"], name: "index_reviews_on_like"
    t.index ["poster_path"], name: "index_reviews_on_poster_path"
    t.index ["score"], name: "index_reviews_on_score"
    t.index ["season_progress"], name: "index_reviews_on_season_progress"
    t.index ["show_id"], name: "index_reviews_on_show_id"
    t.index ["show_title"], name: "index_reviews_on_show_title"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email"
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
