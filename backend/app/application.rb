require 'pry'
require 'json'

class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/login/) && req.post?
      body = JSON.parse(req.body.read)
      user = User.find_by name: body["name"]

      if user
        return [
          201, 
          {'Content-Type' => 'application/json'},
          [user.to_json]
        ]
      else 
        return [
          401,
          {'Content-Type' => 'application/json'},
          [{error: "No user found. Unable to login"}.to_json]
        ]
      end 
    end

    if req.path.match(/entries/) && req.get?
      return [
        200,
        {'Content-Type' => 'application/json'},
        [Entry.all.to_json]
      ]
    elsif req.path.match(/entries/) && req.post?
      entry = JSON.parse(req.body.read)
      new_entry = Entry.create entry
      return [
        201, 
        {'Content-Type' => 'application/json'}, 
        [new_entry.to_json]
      ]
    end 

    if req.path.match(/users/) && req.get?
      return [
        200,
        {'Content-Type' => 'application/json'},
        [User.all.to_json]
      ]
    end

    if req.path.match(/dates/) && req.get?
      return [
        200,
        {'Content-Type' => 'application/json'},
        [User.first.all_dates.to_json]
      ]
    end 

    if req.path.match(/moods/) && req.get?
      return [
        200,
        {'Content-Type' => 'application/json'},
        [User.first.moods.to_json]
      ]
    end 
  end

end
