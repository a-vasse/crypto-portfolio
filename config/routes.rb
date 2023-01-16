Rails.application.routes.draw do
  devise_for :users
  
  devise_scope :user do
    root "devise/sessions#new"
  end

  post 'search', to: 'currencies#search'
  post 'calculate', to: 'currencies#calculate'

  resources :users

  resources :currencies
end
