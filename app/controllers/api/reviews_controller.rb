class Api::ReviewsController < ApplicationController
  before_action :require_signed_in!

  def create
    @review = current_user.reviews.new(review_params)

    if @review.save
      render json: @review
    else
      render json: @review, status: :unprocessable_entity
    end
  end

  private

  def review_params
    params.require(:review).permit(:date_watched, :season_progress, :body, :score, :like, :show_id, :user_id)
  end
end