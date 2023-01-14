class Currency < ApplicationRecord
  def current_price
    url = "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?slug=#{self.slug}"
    request = HTTParty.get(url, headers: { "X-CMC_PRO_API_KEY" => Rails.application.credentials.dig(:pro_api_key)})
    response = JSON.parse(request.body)
  end
end
