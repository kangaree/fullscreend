class Api::SessionsController < ApplicationController
  def create
    # Find user by credentials
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user.nil?
      render json: ['I am the one who knocks! - Heisenberg. No matching account.'], status: 401
    else
      sign_in(@user)
      render 'api/users/show'
    end
  end

  def destroy
    sign_out
    render json: { message: 'Logout successful.' }
  end
end
