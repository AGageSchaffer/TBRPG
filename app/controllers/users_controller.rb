class UsersController < ApplicationController

    skip_before_action :authorize, only: [:create, :destroy]

    def show
        # return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id 
        # render json: @user, status: :create
        user = User.find_by(id: session[:user_id])
        if user
          render json: user, status: :ok
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        Campaign.create!(user_id: user.id)
        Party.create!(name: user.username, user_id: user.id)
        render json: user, status: :created
    end

    def destroy
        User.destroy_all
    end

    private

    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
