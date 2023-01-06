import React from 'react';
import PropTypes from 'prop-types';
import { FiArchive } from 'react-icons/fi';

function ArchiveButton({ id, onArchive }) {
  return <button className='action' onClick={() => onArchive(id)}><FiArchive /></button>
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
}

export default ArchiveButton;