import React , {useState} from 'react';
import Modal from 'react-bootstrap/Modal';

const EditNote = (props) => {
    // console.log(props)
    const [note , setNote] = useState({ Author : props.noteobj.Author , Title: props.noteobj.Title , Content: props.noteobj.Content})
    const handleNoteChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNote({...note , [name] : value});
    // console.log(note);
    }
    return (
        <div>
            <Modal show={props.editShow} onHide={props.handleEditClose} className ="modal">
                <Modal.Header closeButton>
                    <Modal.Title><h2>Edit Note here..........</h2></Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type = "text" placeholder ="Author Name" 
                    name = 'Author' defaultValue = {props.noteobj.Author} 
                    onChange={handleNoteChanges} /><br/>
                    <input type = 'text' placeholder = "Title" 
                    name = 'Title' defaultValue = {props.noteobj.Title}
                    onChange ={handleNoteChanges} /> <br/> 
                    <textarea placeholder = "Write note " 
                    name = 'Content' defaultValue = {props.noteobj.Content}
                    onChange={handleNoteChanges} /> <br/> 
                </Modal.Body>
                <Modal.Footer>
                    <button variant="danger" className="btn btn-danger" onClick={props.handleEditClose}>
                    Cancel
                    </button>
                    <button variant="success" className="btn btn-success" 
                    onClick={() => {
                        props.handleEditClose();
                        props.handleEdit(note);
                    }}>
                        Create
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default EditNote;
