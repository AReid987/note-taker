import React, { Component } from 'react';

class NoteForm extends Component {
  render(){
    return (
      <div>
        <form>
          <input
            type="text" />
          <input
            type="text" />
          <input
            type="submit"
            value="Edit Note" />
        </form>
      </div>
    )
  }
}

export default NoteForm
