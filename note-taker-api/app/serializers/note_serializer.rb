class NoteSerializer < ActiveModel::Serializer
  attributes :id, :title, :content, :count 
end
