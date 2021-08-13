Rails.application.routes.draw do
  get '/users/verify', to: 'users#verify'
  post '/users/login', to: 'users#login'
  resources :users, only: [:create]
  resources :projects
  resources :skills
  resources :contacts
end
