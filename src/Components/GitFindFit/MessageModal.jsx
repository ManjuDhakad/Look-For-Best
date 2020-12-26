import React from 'react';
import Modal from 'react-bootstrap/Modal';

const MesageModal = (props) => {
    return (
        <Modal show={props.showModal !== ''} onHide={props.handleClose} className ="modal">
            <Modal.Header closeButton>
                <Modal.Title>{props.showModal}</Modal.Title>
            </Modal.Header>
    </Modal>
    );
}

export default MesageModal;
