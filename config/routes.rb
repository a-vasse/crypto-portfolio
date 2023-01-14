Rails.application.routes.draw do
  devise_for :users
  root 'currencies#index'
  post 'search', to: 'currencies#search'
  post 'calculate', to: 'currencies#calculate'
end
