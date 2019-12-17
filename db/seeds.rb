require 'json'

json = 'leagues.json'

serialized_input = File.read(json)
input = JSON.parse(serialized_input)
input_leagues = input['leagues']
input_leagues.each do |league|
  new_league = {}
  new_league[:name] = league['name']
  new_league[:country] = league['country']
  new_league[:city] = league['city']
  new_league[:lat] = league['lat']
  new_league[:lng] = league['lng']
  new_league[:region] = league['region']
  new_league[:logo] = league['logo']
  League.create!(new_league)
  league['teams'].each do |team|
    new_team = {}
    new_team[:name] = team['name']
    new_team[:ranking] = team['ranking']
    new_team[:ranking_date] = team['ranking_date']
    new_team[:fts_code] = team['fts_code']
    new_team[:league] = League.last
    Team.create!(new_team)
  end
end

