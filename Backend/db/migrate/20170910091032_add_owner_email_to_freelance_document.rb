class AddOwnerEmailToFreelanceDocument < ActiveRecord::Migration[5.0]
  def change
    add_column :freelance_documents, :owner_email, :string
  end
end
