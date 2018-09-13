class AddCountToNotes < ActiveRecord::Migration[5.2]
  def change
    add_column :notes, :count, :integer
  end
end
