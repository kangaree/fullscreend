json.listings do 
    @listings.each do |listing|
        json.set! listing.id do
            json.partial! '/api/listings/listing', listing: listing
        end
    end
end

json.lists do
    @listings.each do |listing|
        json.set! listing.list_id do
            json.partial! '/api/lists/list', list: listing.list
        end
    end
end