import React from 'react';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import { deleteNote, getNote } from '../utils/local-data';
import Page404 from './404';


function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  return <DetailPage id={id} navigate={navigate} />;
}

class DetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      note: getNote(props.id)
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
  }


  onDeleteHandler(id) {
    deleteNote(id);
    this.props.navigate('/');
  }

  render() {
    if (this.state.note === undefined) {
      return (<Page404 />);
    }

    return (
      <section>
        <NoteDetail {...this.state.note} onDelete={this.onDeleteHandler} />
      </section>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
}

export default DetailPageWrapper;
