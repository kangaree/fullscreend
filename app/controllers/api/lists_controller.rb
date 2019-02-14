class Api::ListsController < ApplicationController
  before_action :require_signed_in!

  def create
    # @list = List.new(list_params)
    @list = current_user.lists.new(list_params)

    if @list.save
      render json: @list
    else
      render json: @list, status: :unprocessable_entity
    end

  end

  def index
    # @lists = current_user.lists
    @lists = List.all

    @listings = [];    
    @lists.each do |list|
        @listings.concat(list.listings)
    end
  end

  def user_lists
    @lists = User.find(params[:user_id]).lists
    # @lists = current_user.lists
    # @lists = List.all

    @listings = [];    
    @lists.each do |list|
        @listings.concat(list.listings)
    end
  end

  def show
    @list = List.find(params[:id])
  end

  def update
    @list = List.find(params[:id])
    
    if @list.update(list_params)
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  def destroy
    @list = List.find(params[:id])
    if @list.destroy
      render :show
    else
      render json: @list.errors.full_messages, status: 422
    end
  end

  private

  def list_params
    params.require(:list).permit(:title, :user_id, :description)
  end
end