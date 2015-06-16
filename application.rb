require "sinatra"

get "/" do
  Dir.chdir("public")
  @folders = Dir.glob("0*")
  erb :index
end
