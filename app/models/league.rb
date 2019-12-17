class League < ApplicationRecord
  validates :name, presence: true
  validates :country, presence: true
  validates :city, presence: true
end
