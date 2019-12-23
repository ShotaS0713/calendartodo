Rails.application.routes.draw do
  resources :events
  root 'events#index'
  resources :task, only: :index
end
