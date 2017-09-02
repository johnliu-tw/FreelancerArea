class RenameEmaillPasswordToEmailPassword < ActiveRecord::Migration[5.0]
  def change
    rename_column :admins, :Emaill_password, :Email_password
  end
end
