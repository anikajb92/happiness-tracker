class CreateEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :entries do |t|
      t.references :user
      t.integer :mood
      t.boolean :meditation
      t.boolean :workout
      t.boolean :social
      t.boolean :creative
      t.integer :weather
      t.date :date
      t.integer :sleep
    end 
  end
end
