import React ,{useState , useRef} from 'react';
import addImg from './images/plus.png';
import './Home.css';
import listNote from './list';

import AddNote from './AddNote';
import EditNote from './EditNote';


var noteId;
// react global varible is declare outside the component..........
const Home = () => {
    const [list, setList] = useState(listNote);
    const [show, setShow] = useState(false);
    const [editShow, editSetShow] = useState(false);

    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);
    const handleEditShow = () => editSetShow(true);
    const handleEditClose = () => editSetShow(false);

    function handleAdd(note) {
        const newList = list.concat({Time: new Date().toLocaleString() , ...note});
        setList(newList);
        // console.log(newList);
    }
   
    function getNoteId(event){
        // console.log(event.target.parentNode.parentNode.getAttribute("id"));
        noteId = event.target.parentNode.parentNode.getAttribute("id");
    }

    function handleDelete(){
        // console.log(noteId);
        // console.log(event.target.parentNode.parentNode.getAttribute("id"));
        
        let newList = [...list]
        newList.splice(noteId , 1);
        setList(newList);
        // console.log(newList);
    }  
    function handleEdit(editedNote) {
        // console.log(noteId);
        // console.log(editedNote);
        let newEditedList = [...list];
        newEditedList[noteId] = {Time: new Date().toLocaleString() , ...editedNote};
        setList(newEditedList);
        // console.log(newEditedList);
    }


    return (
        <div className = "container">
            <div className="header">
                <img onClick ={handleShow} src ={addImg}/> 
                <h1>TAKE A NOTE</h1>
            </div>
            <input id = "search_bar" type ="search" placeholder ="Search a note........" />
            <div className = "note_container">
                <ul>
                    {list.map( (item ,index) => 
                    <div className = "li_div"  key = {index} id = {index}>
                        <li>
                            {item.Time}
                            <hr style={{borderColor: 'white'}} />
                            {item.Author}<br/>
                            {item.Title}<br/>
                            <button id ="btn_edit" onClick={(e) => {getNoteId(e); handleEditShow() }}> Edit </button>
                            <button id="btn_del" onClick={(e) => {getNoteId(e); handleDelete() }}>Delete</button>
                        </li> 
                    </div>
                    )}
                </ul>
            </div>
            {show ? <AddNote show = {show} handleClose ={handleClose} handleAdd ={handleAdd} /> : null} 
            {/* {console.log(list[noteId])} */} 
            {editShow ? <EditNote noteobj = {list[noteId]} editShow = {editShow} handleEditClose ={handleEditClose} handleEdit ={handleEdit} /> : null} 
        </div>
    );
};

export default Home;
