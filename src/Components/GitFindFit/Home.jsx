import React ,{useState } from 'react';

import './Home.css';
import SearchBox from './SearchBox';
import UserView from './UserView';
import SearchResults from './SearchResults';
import MessageModal from './MessageModal';

const Home = () => {
    const [userInfo , setUserInfo] = useState({});
    const [repoList , setRepoList] = useState([]);
    const [resultList , setResultList] = useState([])
    const [ show , setShow] = useState(false)
    const[showModal , setShowModal] = useState('')

    const handleShowModal = (msg) => {
        setShowModal(msg)
    }

    const handleClose = () => {
        setShowModal('')
    }


    const handleSearch = (userName) => {
        Promise.all([
            fetch(`https://api.github.com/users/${userName}`),
            fetch(`https://api.github.com/users/${userName}/repos`)
        ])
        .then(([res1 , res2]) => Promise.all([res1.json() , res2.json()]))
        .then(([data1 , data2]) => {setUserInfo(data1); setRepoList(data2)})
        .catch(error => {console.log(error)})

    }
    // console.log(userInfo)
    // console.log(repoList)

    const handleAddUser = () =>{
        setResultList((resultList) => [...resultList , {userInfo : userInfo , repoList : repoList}])
    }
    // console.log(resultList)

    const handleDeleteUser = (index) =>{
        let newResultList =[...resultList]
        newResultList.splice(index , 1)
        setResultList(newResultList)
    }

    return (
            <div className = "container">
                {(showModal !== '') ? <MessageModal handleClose ={handleClose} showModal={showModal} /> : null}
                <SearchBox handleSearch={handleSearch} /> 
                <div style={{marginBottom : "10px"}}>
                    
                    <button id="result_list_btn" onClick={() => setShow(true)}>Results List</button>
                    <button id="result_list_btn" onClick={() => setShow(false)}>Hide List</button>
                </div>
                {show ? <SearchResults resultList={resultList} handleDeleteUser={handleDeleteUser}  handleClose={handleClose} handleShowModal ={handleShowModal}/> : null}
                {userInfo.login && !show ? <UserView userInfo={userInfo} repoList={repoList} handleAddUser={handleAddUser} handleClose={handleClose} handleShowModal ={handleShowModal} /> : null }

            </div>
    );
}

export default Home;
