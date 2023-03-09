class CampaignsController < ApplicationController

    def index
        render json: @current_user.campaigns, status: :ok
    end
end
