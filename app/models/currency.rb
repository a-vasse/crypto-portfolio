class Currency < ApplicationRecord
  def calculate_value(amount)
    (current_price.to_f * amount.to_f).round(0)
  end

  def current_price
    url = "https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?slug=#{self.slug}&convert=JPY"
    request = HTTParty.get(url, headers: { "X-CMC_PRO_API_KEY" => Rails.application.credentials[:coinAPI] })
    JSON.parse(request.body)['data'].values[0]['quote']['JPY']['price']
  end
end
