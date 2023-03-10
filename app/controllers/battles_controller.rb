class BattlesController < ApplicationController

    skip_before_action :authorize

    def create
        
    if set_battle 
        set_battle.shuffleInitiative
        render json: set_battle, status: :ok 
    else
        battle = Battle.create!(battle_params)
        battle.shuffleInitiative
        render json: battle, status: :created
    end
    end

    def destroy
        battle = Battle.find(params[:id])
        battle.destroy
        head :no_content
    end

    private 

    def set_battle
        Battle.find_by(enemy_party_id: params[:enemy_party_id])
    end

    def battle_params
        params.permit(:party_id, :enemy_party_id, :user_id)
    end
end
