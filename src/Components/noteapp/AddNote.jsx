import React , {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

const AddNote = (props) => {

    const [note , setNote] = useState({ Author : '' , Title: '' , Content: ''})
    const handleNoteChanges = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNote({...note , [name] : value});
        // console.log(note);
    }
    return (
        <div>
            <Modal show={props.show} onHide={props.handleClose} className ="modal">
                <Modal.Header closeButton>
                    <Modal.Title><h2>Write a Note here..........</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type = "text" placeholder ="Author Name" 
                    name = 'Author' value = {note.Author}
                    onChange={handleNoteChanges} /><br/>
                    <input type = 'text' placeholder = "Title" 
                    name = 'Title' value = {note.Title}
                    onChange ={handleNoteChanges} /> <br/> 
                    <textarea placeholder = "Write note " 
                    name = 'Content' value = {note.Content}
                    onChange={handleNoteChanges} /> <br/> 
                </Modal.Body>
                <Modal.Footer>
                    <button variant="danger" className="btn btn-danger" onClick={props.handleClose}>
                    Cancel
                    </button>
                    <button variant="success" className="btn btn-success" 
                    onClick={() => {
                        props.handleClose();
                        props.handleAdd(note);
                    }}>
                        Create
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AddNote;
