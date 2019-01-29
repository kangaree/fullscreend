Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'root#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:new, :create]
    # do
    #   resources :chirps, only: [:index]
    # end

    resource :session, only: [:new, :create, :destroy]

    # resources :reviews, only: [:create, :destroy, :update]

    # post '/search', to: 'users#search'

    # resources :chirps
    # resources :likes, only: [:create]
    # delete '/likes', to: 'likes#destroy'
    # resources :follows, only: [:create, :destroy]

    resources :reviews, only: [:create, :update, :show]

  end

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resources :review, only: [:destroy]
end