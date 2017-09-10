class AddServiceContentToProposals < ActiveRecord::Migration[5.0]
  def change
    add_column :proposals, :service_content, :integer
  end
end
