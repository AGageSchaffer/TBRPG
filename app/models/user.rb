class User < ApplicationRecord
    has_secure_password
    has_many :characters
    has_one :party
    has_many :campaigns
end
