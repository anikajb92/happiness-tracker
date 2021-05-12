class User < ActiveRecord::Base
  has_many :entries 

  def all_dates 
    self.entries.map do |entry|
      date = entry.date.strftime("%m/%d/%Y")
      "#{date}"
    end 
  end

end 