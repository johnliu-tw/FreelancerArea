Rails.application.routes.draw do
  resources :proposals
  resources :freelance_documents
  resources :documents
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
