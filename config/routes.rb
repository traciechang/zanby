Rails.application.routes.draw do
  root 'homes#show'

  get '/login', to: 'sessions#new'
  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  
  resource :session, only: [:destroy]

  namespace :api, defaults: { format: :json } do
    resource :current_user, only: [:show]
  end
end