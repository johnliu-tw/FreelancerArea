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

ActiveRecord::Schema.define(version: 20170902145533) do

  create_table "admins", force: :cascade do |t|
    t.string   "account"
    t.string   "password"
    t.string   "Email_account"
    t.string   "Email_password"
    t.string   "Email_host"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "documents", force: :cascade do |t|
    t.string   "title"
    t.datetime "created_at",                                                            null: false
    t.datetime "updated_at",                                                            null: false
    t.string   "string"
    t.string   "#<ActiveRecord::ConnectionAdapters::TableDefinition:0x007fd617b057a8>"
  end

  create_table "freelance_documents", force: :cascade do |t|
    t.string   "title"
    t.text     "file_url"
    t.string   "description"
    t.text     "image_url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "proposals", force: :cascade do |t|
    t.string   "customer"
    t.string   "portfolio_url"
    t.string   "tools"
    t.decimal  "estimated_hours"
    t.decimal  "hourly_rate"
    t.integer  "weeks_to_complete"
    t.string   "client_email"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

end
