class AdjustAndAddColumnsToDocumentsAndProposals < ActiveRecord::Migration[5.0]
  def change
    add_column :freelance_documents, :service_location, :string
    add_column :freelance_documents, :service_content, :integer
    add_column :freelance_documents, :contact, :string
    add_column :proposals, :provide_tool, :string
    add_column :proposals, :location, :string
    rename_column :proposals, :weeks_to_complete, :days_to_complete
  end
end
