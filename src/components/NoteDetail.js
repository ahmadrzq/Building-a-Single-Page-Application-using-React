import React from 'react';
import PropTypes from 'prop-types';
import { showFormattedDate } from '../utils/index';

function NoteDetail({ title, body, createdAt }) {
    return (
        <section className='detail-page'>
            <h3 className='detail-page__title'>{title}</h3>
            <h3 className='detail-page__createdAt'>{showFormattedDate(createdAt)}</h3>
            <div className='detail-page__body'>{body}</div>
            <div className='detail-page__action'>
                <button className='action' title='Arsipkan' >A</button>
                <button className='action' title='Hapus' >H</button>
            </div>
        </section>
    );
}

NoteDetail.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default NoteDetail;

