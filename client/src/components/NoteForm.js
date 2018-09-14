import React from 'react';

const NoteForm = props => {
  return (
    <div className="form-group jumbotron">
      <form onSubmit={props.onSubmit}>
        <label htmlFor="title">Title</label>
        <div className="field">
          <input
            type="text"
            name="title"
            value={props.note.title}
            onChange={props.onChange}/>
        </div>
          <label htmlFor="content">Content</label>
        <div className="field">
          <input
            type="text"
            name="content"
            value={props.note.content}
            onChange={props.onChange} />
        </div>
        <br/>
        <input
          type="submit"
          className="btn btn-primary"
          value={props.button? "Edit Note" : "Save Note"} />
      </form>
    </div>
  )
}

export default NoteForm
