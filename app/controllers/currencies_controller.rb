class CurrenciesController < ApplicationController
  skip_before_action :authenticate_user!, only: :index

  def index
  end

  def search
  end

  def calculate
  end
end
