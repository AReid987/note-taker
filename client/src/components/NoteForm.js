import React, { Component } from 'react';

class NoteForm extends Component {
  render(){
    return (
      <div className="form-group jumbotron">
        <form onSubmit={this.props.onSubmit}>
          <label htmlFor="title">Title</label>
          <div className="field">
            <input
              type="text"
              name="title"
              value={this.props.note.title}
              onChange={this.props.onChange}/>
          </div>
            <label htmlFor="content">Content</label>
          <div className="field">
            <input
              type="text"
              name="content"
              value={this.props.note.content}
              onChange={this.props.onChange} />
          </div>
          <br/>
          <input
            type="submit"
            className="btn btn-primary"
            value={this.props.button? "Edit Note" : "Save Note"} />
        </form>
      </div>
    )
  }
}

export default NoteForm
