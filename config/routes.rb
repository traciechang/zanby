Rails.application.routes.draw do
  root 'static_pages#root'

  get 'auth/:provider/callback', to: 'api/sessions#create'
  get 'auth/failure', to: redirect('/')

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
  end
end
