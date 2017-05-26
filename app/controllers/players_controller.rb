class PlayersController < ApplicationController
  def index
    @players = Player.all
  end

  def create
    puts 'hey'
    puts params.inspect
    @player = Player.new(player_params)

    if @player.save
      flash[:notice] = "Player Saved!"
      redirect_to '/'
    else
      flash[:alert] = "Invalid Information"
      redirect_to players_path
    end
  end

  def new
    @player = Player.new
  end

  def show
    @player = Player.find(params[:id])
  end

  def destroy
  end

  private
  # strong params
  def player_params
    params.require(:player).permit(:name, :position, :school, :age, :weight, :height, :minutes_played, :injuries, :strength_of_schedule, :position_injury, :severity_of_injury)
  end
end
