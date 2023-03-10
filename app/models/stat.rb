class Stat < ApplicationRecord
    belongs_to :role
    belongs_to :owner, polymorphic: true
end
