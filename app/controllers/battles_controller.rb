class BattlesController < ApplicationController

    def create
        enemy_party = Enemy.all.where(enemy_party_id: 1)
        player_party = Character.all.where(party_id: 1)
        encounter = {
            players: player_party,
            enemies: enemy_party
        }


    end
end
