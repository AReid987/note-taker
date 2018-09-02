class NotesController < ApplicationController

  def index
    @notes = Note.all
    render json: @notes
  end

  def show
    @note = Note.find(params[:id])
    render json: @note
  end

  def update
  end 
  # private
  #
  # def note_params
  #   params.permit(:title, :content)
  # end

end
