class CharactersController < ApplicationController

    def index
        render json: @current_user.characters, status: :ok
    end
end
