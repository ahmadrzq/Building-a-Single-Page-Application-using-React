import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';
import { showFormattedDate } from '../utils/index';

function NoteDetail({ title, body, createdAt, id, onDelete, onArchive }) {
    return (
        <section className='detail-page'>
            <h3 className='detail-page__title'>{title}</h3>
            <h3 className='detail-page__createdAt'>{showFormattedDate(createdAt)}</h3>
            <div className='detail-page__body'>{body}</div>
            <div className='detail-page__action'>
                <ArchiveButton id={id} onArchive={onArchive} />
                <DeleteButton id={id} onDelete={onDelete} />
            </div>
        </section>
    );
}

NoteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
};

export default NoteDetail;

