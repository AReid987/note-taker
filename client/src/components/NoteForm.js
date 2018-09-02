import React, { Component } from 'react';

class NoteForm extends Component {
  render(){
    return (
      <div>
        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            name="title"
            value={this.props.note.title}
            onChange={this.props.onChange}/>
          <input
            type="text"
            name="content"
            value={this.props.note.content}
            onChange={this.props.onChange} />
          <input
            type="submit"
            value="Edit Note" />
        </form>
      </div>
    )
  }
}

export default NoteForm
