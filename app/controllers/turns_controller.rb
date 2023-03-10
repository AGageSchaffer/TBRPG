class TurnsController < ApplicationController

    def create
        turn = Turn.create!(turn_params)
        render json: turn, status: :created
    end

    private 

    def turn_params
        params.permit(:battle_id, :character_id, :enemy_id)
    end
end
