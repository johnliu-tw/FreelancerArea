class CreateAdmins < ActiveRecord::Migration[5.0]
  def change
    create_table :admins do |t|
      t.string :account
      t.string :password
      t.string :Email_account
      t.string :Emaill_password
      t.string :Email_host

      t.timestamps
    end
  end
end
