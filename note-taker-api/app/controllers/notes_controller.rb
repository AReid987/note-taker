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
    @post = Post.find(params[:id])
    @post.update(title: params[:title], content: params[:content])
    render json: @post
  end

  private

  def note_params
    params.permit(:title, :content)
  end

end
