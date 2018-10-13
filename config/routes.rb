Rails.application.routes.draw do
  root 'homes#show'

  get 'auth/:provider/callback', to: 'sessions#create'
  get 'auth/failure', to: redirect('/')
  
  get '/login', to: 'sessions#new'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:destroy]
  end
end