Rails.application.routes.draw do
  resources :tests
  resources :battles
  resources :shops
  resources :inventories
  resources :turns
  resources :parties
  resources :enemy_parties
  resources :shop_items
  resources :characters
  resources :enemies
  resources :items
  resources :roles
  resources :stats
  resources :spells

  post "/signup", to: "users#create"

  delete "/delete-users", to: "users#destroy"

  get "/me", to: "users#show"

  post "/login", to: "sessions#create"

  delete "logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
