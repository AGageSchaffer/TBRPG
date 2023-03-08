class CharactersController < ApplicationController

    def index
        render json: @current_user.characters, status: :ok
    end

    def create 
        character = Character.create!(character_params)
        render json: character, status: :created
    end

    def update
        character = @current_user.characters.find(params[:id])
        character.update(character_params)
        render json: character, status: :accepted
    end

    private

    def character_params
        params.permit(:party_id, :name, :experience, :targetable, :role_id, :sprite_id, :level, :race, :user_id, )
    end
end
