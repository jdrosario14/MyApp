Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :airlines, param: :slug
      resources :reviews, only: [:create, :destroy]
    end
  end

  root 'homepage#index'
  get '/*path' => 'homepage#index'
end
