Rails.application.routes.draw do
  devise_for :users
  resources :calendar, only: :index
  resources :events
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'calendar#index'
end
