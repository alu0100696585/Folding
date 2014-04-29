require 'omniauth'
require 'omniauth-oauth2'
require 'omniauth-google-oauth2'
require 'omniauth-facebook'


use OmniAuth::Builder do
  config = YAML.load_file 'config/config.yml'
  provider :google_oauth2, config['identifier'], config['secret']
  provider :facebook, config['widentifier'], config['wsecret']
end

get '/auth/:name/callback' do
  session[:auth] = @auth = request.env['omniauth.auth']
  session[:name] = @auth['info'].name
  session[:image] = @auth['info'].image
  #Existe la posibilidad de que el nombre de usuario tenga espacios, lo que puede provocar errores en las url.
  #Para evitarlo usaremos el email.
  session[:email] = @auth['info'].email
  
  PP.pp @auth.methods.sort
  
  flash[:notice] = 
        %Q{<div class="success">Authenticated as #{@auth['info'].name}.</div>}
  
  if !Autor.first(:user => session[:email])
    u = Autor.create(:user => session[:email])
    u.save
  end
  
  redirect '/'
end

get '/auth/failure' do
  flash[:notice] = params[:message] 
  redirect '/'
end
