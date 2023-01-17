currency = []

url = "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=200&aux=cmc_rank,max_supply,total_supply&convert=JPY"
request = HTTParty.get(url, headers: { "X-CMC_PRO_API_KEY" => Rails.application.credentials[:coinAPI] })
response = JSON.parse(request.body)
coinmarketcap_map = response['data'].flatten

coinmarketcap_map.each do |coin|
  new_currency = { name: coin['name'], currency_symbol: coin['symbol'], max_supply: coin['max_supply'], slug: coin['slug'] }
  currency << new_currency
end

Currency.create(
  currency
)
