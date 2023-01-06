import React from 'react';
import PropTypes from 'prop-types';
import NoteItem from './NoteItem';

function Notelist({ notes }) {
  return (
    notes.length > 0 ?
      <section className="notes-list">
        {
          notes.map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              {...note} />
          ))
        }
      </section> :
      <p className="notes-list__empty-message">Tidak ada catatan</p>
  );
}

Notelist.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Notelist;