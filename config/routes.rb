Rails.application.routes.draw do
  resources :contacts, only: [:index]
end
