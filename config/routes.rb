Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'root#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:new, :create]

    resource :session, only: [:new, :create, :destroy]

    resources :reviews, only: [:create, :update, :show, :destroy]

    resources :shows, only: [] do
      resources :reviews, only: [:index]
    end

    get "reviews", to: "reviews#index_all"

    resources :lists, only: [:create, :update, :show, :destroy, :index]

    resources :listings, only: [:create, :update, :show, :destroy, :index]

  end

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resources :reviews, only: [:destroy]
end