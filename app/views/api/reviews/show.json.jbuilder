json.review do
  json.partial! '/api/reviews/review', review: @review
end

json.user do
  json.partial! '/api/users/user', user: @review.user
end
