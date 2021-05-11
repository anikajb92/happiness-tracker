require 'pry'
require 'json'

class Application

  def call(env)
    resp = Rack::Response.new
    req = Rack::Request.new(env)

    if req.path.match(/login/) && req.get?
      body = JSON.parse(req.body.read)
      user = User.find_by username: body["username"]

      if user
        return [
          200, 
          {'content-Type' => 'application.json'},
          [user.to_json]
        ]
      else 
        return [
          401,
          {'Content-Type' => 'application/json'},
          [{error: "No user found".to_json}]
        ]
      end 
    end
  end

end
