Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'leagues/index'
      get '/show/:id', to: 'leagues#show'
    end
  end
  root 'pages#home'
  get '/*path' => 'pages#home'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
