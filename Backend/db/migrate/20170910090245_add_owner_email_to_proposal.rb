class AddOwnerEmailToProposal < ActiveRecord::Migration[5.0]
  def change
    add_column :proposals, :owner_email, :string
  end
end
