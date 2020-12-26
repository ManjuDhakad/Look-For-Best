import React from 'react';

const UserView = (props) => {
    // console.log(props)
    return (
        <div className = "user_view_section">
            <div >
                <img className= "user_img" src = {props.userInfo.avatar_url} alt=""/>
            </div>
            <div className="user_repo_info">
                
                <div>
                    <label>Github User: &nbsp;&nbsp;</label>
                    <b>{props.userInfo.login}</b>
                </div>
                
                <div>
                    <label>No. of Repositories: &nbsp;&nbsp;</label>
                    {props.userInfo.public_repos}
                </div>
                <div style={{display:'inline'}}>
                    <label>List of Top 5 Repo: &nbsp;&nbsp;</label>
                    {props.repoList.map((item, index) => {
                        return index<5 ? <li key={index} style={{paddingLeft: '180px'}} >{item.name} </li>: null
                    })}
                </div> 
            </div>
            <div className='btn'>
                <button id='add_btn' onClick={() => {props.handleAddUser() ; props.handleShowModal("User added successfully")}} >Add User</button>
                <a href="#search_div"><button id='search_next_btn'>Search Next</button> </a>
            </div>
        </div>
    );
}

export default UserView;
