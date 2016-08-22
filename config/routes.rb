Rails.application.routes.draw do
  root 'contacts#index'
  resources :contacts, only: [:index, :create]
end
