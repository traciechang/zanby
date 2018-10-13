Rails.application.routes.draw do
  root 'sessions#new'

  get 'auth/:provider/callback', to: 'api/sessions#create'
  get 'auth/failure', to: redirect('/')
  
  resources :sessions, only: [:new]
  resource :home, only: [:show] # get '/home', to: 'home#show'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
  end
end