Rails.application.routes.draw do
  scope :api do
    resources :notes, only [:index]
  end
end
