Rails.application.routes.draw do
  devise_for :users
  root 'currencies#index'

  post 'search', to: 'currencies#search'
  post 'calculate', to: 'currencies#calculate'
  get '/users/:id', to: 'currencies#index', as: 'currencies'

  resources :users do
    resources :currencies
  end
end
