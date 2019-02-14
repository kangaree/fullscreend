json.listing do
  json.partial! '/api/listings/listing', listing: @listing
end

json.list do
  json.partial! '/api/lists/list', list: @listing.list
end
