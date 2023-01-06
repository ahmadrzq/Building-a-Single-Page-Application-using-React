import React from 'react';
import PropTypes from 'prop-types';

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        // inisialisasi state
        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        this.setState(() => {
            return {
                title: event.target.value,
            }
        });
    }

    onBodyChangeEventHandler(event) {
        this.setState(() => {
            return {
                body: event.target.value,
            }
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        return (
            <form>
                <div className='add-new-page__input'>
                    <input className="add-new-page__input__title" type="text"
                        placeholder="Nama"
                        value={this.state.title}
                        onChange={this.onTitleChangeEventHandler} />

                    <input
                        className='add-new-page__input__body'
                        type="text"
                        placeholder="Tag"
                        value={this.state.body}
                        onChange={this.onBodyChangeEventHandler} />
                </div>
                <div className='add-new-page__action'>
                    <button className="action" type="button" title="Simpan" onClick={this.onSubmitEventHandler} ></button>
                </div>
            </form>
        )
    }
}

NoteInput.propTypes = {
    addNote: PropTypes.func.isRequired,
}

export default NoteInput;