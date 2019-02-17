json.lists do 
    @lists.each do |list|
        json.set! list.id do
            json.partial! '/api/lists/list', list: list

            json.listings do
                list.listings.each do |listing|
                    json.set! listing.id do
                        json.extract! listing, :poster_path, :note, :show_title, :show_id
                    end
                end
            end
            
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