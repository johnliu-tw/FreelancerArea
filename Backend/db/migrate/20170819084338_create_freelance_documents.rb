class CreateFreelanceDocuments < ActiveRecord::Migration[5.0]
  def change
    create_table :freelance_documents do |t|
      t.string :title
      t.text :file_url
      t.string :description
      t.text :image_url

      t.timestamps
    end
  end
end
