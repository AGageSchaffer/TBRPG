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

    def update 
        @current_user.characters.all.each do |c| c.update(level: 2) end
    end

    def destroy
        battle = Battle.find(params[:id])
        battle.destroy
        Turn.destroy_all
        Character.all.each do |c| c.stat.update(health_points: c.stat.max_health) end
        Character.all.each do |c| c.update(is_dead: false) end
        Enemy.all.each do |e| e.stat.update(health_points: e.stat.max_health) end
        Enemy.all.each do |e| e.update(is_dead: false) end
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
