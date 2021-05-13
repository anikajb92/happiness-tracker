class Entry < ActiveRecord::Base
  belongs_to :user 
  validates :date, uniqueness: { scope: :user_id}
end 