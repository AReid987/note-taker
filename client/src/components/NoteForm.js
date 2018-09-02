import React, { Component } from 'react';

class NoteForm extends Component {
  render(){
    return (
      <div>
        <form>
          <input
            type="text"
            value={this.props.note.title} />
          <input
            type="text"
            value={this.props.note.content} />
          <input
            type="submit"
            value="Edit Note" />
        </form>
      </div>
    )
  }
}

export default NoteForm
