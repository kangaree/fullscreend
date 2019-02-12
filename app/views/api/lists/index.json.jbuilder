json.lists do 
    @lists.each do |list|
        json.set! list.id do
            json.partial! '/api/lists/list', list: list
        end
    end
end

json.users do
    @lists.each do |list|
        json.set! list.user_id do
            json.partial! '/api/users/user', user: list.user
        end
    end
end

json.listings do
    @listings.each do |listing|
        json.set! listing.id do
            json.partial! '/api/listings/listing', listing: listing
        end
    end
end