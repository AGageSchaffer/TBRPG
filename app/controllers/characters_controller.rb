class CharactersController < ApplicationController

    def index
        render json: @current_user.characters, status: :ok
    end

    def create 
        # role = Role.find_by(id: character_params[:role_id])
        # character = Character.create!(character_params[:party_id, :name, :experience, :targetable, :stat_id, :sprite_id, :level, :race, :user_id], role: role)
        character = Character.create!(name: params[:name], level: params[:level], race: params[:race], party_id: params[:party_id], role_id: params[:role_id], sprite_id: params[:sprite_id], user_id: params[:user_id])
        role = Role.find(params[:role_id])
        Stat.create!(health_points: role.health_points, max_health: role.max_health, mana: role.mana, max_mana: role.mana, mana_regen: role.mana_regen, magic: role.magic, physical: role.physical, faith: role.faith, role_id: role.id, owner: character)
        render json: character, status: :created
    end

    def update
        character = @current_user.characters.find(params[:id])
        character.update(character_params)
        render json: character, status: :accepted
    end

    def destroy 
        character = set_character
        character.destroy
        head :no_content
    end

    private

    def character_params
        params.permit(:party_id, :name, :experience, :targetable, :stat_id, :sprite_id, :level, :race, :user_id, :role_id)
    end

    def set_character
        Character.find(params[:id])
    end

end
