class Api::ListingsController < ApplicationController
  before_action :require_signed_in!

  def create
    @listing = current_user.listings.new(list_params)

    if @listing.save
      render json: @listing
    else
      render json: @listing, status: :unprocessable_entity
    end

  end

  def index
    @listings = Listing.all
  end

  def show
    @listing = Listing.find(params[:id])
  end

  def update
    @listing = Listing.find(params[:id])
    
    if @listing.update(list_params)
      render :show
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  def destroy
    @listing = Listing.find(params[:id])
    if @listing.destroy
      render :show
    else
      render json: @listing.errors.full_messages, status: 422
    end
  end

  private

  def list_params
    params.require(:list).permit(:title, :user_id, :description)
  end
end