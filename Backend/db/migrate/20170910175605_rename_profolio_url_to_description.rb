class RenameProfolioUrlToDescription < ActiveRecord::Migration[5.0]
  def change
    rename_column :proposals, :portfolio_url, :description
  end
end
