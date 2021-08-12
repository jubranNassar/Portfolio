Rails.application.routes.draw do
  resources :projects
  resources :skills
  resources :users, only: [:create]
  post '/users/login', to: 'users#login'
  get '/users/verify', to: 'users#verify'
end
