class PartiesController < ApplicationController

    def index
        render json: @current_user.party.characters, status: :ok
    end
end
