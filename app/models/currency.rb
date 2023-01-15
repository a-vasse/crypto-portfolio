class Currency < ApplicationRecord
  def current_price
    url = "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?slug=#{self.slug}&convert=JPY"
    request = HTTParty.get(url, headers: { "X-CMC_PRO_API_KEY" => "3fa86e6e-25bf-44bc-8ac9-b4f32ffec0bc" })
    JSON.parse(request.body)['data'].values[0]['quote']['JPY']['price']
  end
end
