class NotesController < ApplicationController

  def index
    @notes = Note.all
    render json: @notes
  end

  # private
  #
  # def note_params
  #   params.permit(:title, :content)
  # end

end
