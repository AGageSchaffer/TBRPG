class Turn < ApplicationRecord
    belongs_to :attacker, polymorphic:  true
    belongs_to :target, polymorphic: true
    belongs_to :battle

    def combat (attacker, target)
        remaining_health = target.stat[:health_points] - attacker.stat.physical - attacker.stat.magic - attacker.stat.faith
        case remaining_health
        when ..0 
            then
            target.stat.update(health_points: 0)
            target.update(is_dead: true)
            # self.update(skirmish_log: "#{attacker.name} has slain #{target.name}")
        
        else 
            target.stat.update(health_points: remaining_health)
        end
    end
end
