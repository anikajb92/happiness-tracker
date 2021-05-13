class User < ActiveRecord::Base
  has_many :entries 

  def all_dates 
    self.entries.map do |entry|
      date = entry.date.strftime("%m/%d/%Y")
      "#{date}"
    end 
  end

  def moods
    self.entries.map do |entry|
      date = entry.date.strftime("%d").to_i
      [date, entry.mood]
    end.sort
  end 

end 