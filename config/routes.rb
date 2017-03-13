Rails.application.routes.draw do

  root 'records#index'
  
  resources :records
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
