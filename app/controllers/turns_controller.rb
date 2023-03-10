class TurnsController < ApplicationController

    def create
        if(params[:player_attacking] == true) 
            attacker = Character.find(params[:attacker])
            target = Enemy.find(params[:target])
        else 
            attacker = Enemy.find(params[:attacker])
            target = Character.find(params[:target])
        end

        battle = Battle.find(params[:battle])
        # attacker = params[:attacker]
        # target = params[:target]

        turn = Turn.create!(target: target, attacker: attacker, battle: battle)
        turn.combat(attacker, target)
        render json: turn, status: :created
    end

    private 

    def turn_params
        params.permit(:battle, :attacker, :target, :player_attacking)
    end
end
