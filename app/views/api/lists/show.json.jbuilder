json.list do
  json.partial! '/api/lists/list', list: @list
  json.listings do
      @list.listings.each do |listing|
          json.set! listing.id do
              json.extract! listing, :poster_path, :note
          end
      end
  end
end

json.user do
  json.partial! '/api/users/user', user: @list.user
end
