json.reviews do 
    @reviews.each do |review|
        json.set! review.id do
            json.partial! '/api/reviews/review', review: review
        end
    end
end

json.users do
    @reviews.each do |review|
        json.set! review.user_id do
            json.partial! '/api/users/user', user: review.user
        end
    end
end