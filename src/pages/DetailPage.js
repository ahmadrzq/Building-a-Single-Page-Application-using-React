import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import NoteDetail from '../components/NoteDetail';
import { deleteNote, getNote } from '../utils/local-data';
import { useNavigate } from 'react-router-dom';


function DetailPageWrapper() {
  const { id } = useParams();
  const navigate = useNavigate();
  function redirect() {
    navigate('/')
  }
  return <DetailPage id={id} navigate={redirect} />;
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
    const { navigate } = this.props;
    navigate();
  }

  render() {
    if (this.state.note === undefined) {
      return <h3>Tidak ada catatan dengan id ini!</h3>;
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
