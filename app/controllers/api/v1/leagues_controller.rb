class Api::V1::LeaguesController < ApplicationController
  def index
    league = League.all.order(region: :desc)
    render json: league
  end

  def create
    league = League.create!(league_params)
    if league
      render json: league
    else
      render json: league.errors
    end
  end

  def show
    if league
      render json: league
    else
      render json: league.errors
    end
  end

  def destroy
  end

  private

  def league_params
    params.permit(:name, :country, :city, :region, :lat, :lng, :logo)
  end

  def league
    @league ||= League.find(params[:id])
  end
end
