json.list do
  json.partial! '/api/lists/list', list: @list
end

json.user do
  json.partial! '/api/users/user', user: @list.user
end
