require 'sinatra'

  configure do
    enable :sessions
    set :session_secret, ENV.fetch('SESSION_SECRET')
  end

  before do
    headers "Access-Control-Allow-Origin" => '*'
  end

  get '/' do
    redirect '/temperature'
  end

  get '/temperature' do
  end

  post '/temperature' do
    session[:temp] = params['temp']
  end
