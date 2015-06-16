require "sinatra"
require "json"
require "./lib/presidents"

get "/" do
  Dir.chdir("public")
  @folders = Dir.glob("0*")
  erb :index
end

get "/api/presidents" do
  presidents.to_json
end

get "/api/presidents/:id" do
  id = params[:id].to_i - 1
  presidents[id].to_json
end

post "/api/presidents" do
  params = JSON.parse(request.env["rack.input"].read)
  presidents << params
  session[:presidents] = presidents
  presidents.to_json
end

helpers do
  def presidents
    session[:presidents] ||= PRESIDENTS
  end
end
