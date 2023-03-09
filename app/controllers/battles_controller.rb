class BattlesController < ApplicationController

    def create
        battle = Battle.create!(battle_params)
    end

    private 

    def battle_params
        params.permit(:party_id, :enemy_party_id)
    end
end
