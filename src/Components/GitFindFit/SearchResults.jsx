import React from 'react';

const SearchResults = (props) => {
    return (
        <div className='list_container'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Serial No.</th>
                        <th>Profile</th>
                        <th>User Name</th>
                        <th>No of repository</th>
                        <th>List of Repository</th>
                    </tr>    
                </thead>
                <tbody>
                    {
                        props.resultList.map((item , index)=> {
                            return (
                                <tr key={index} id={index}>
                                    
                                    <td className="green">{index + 1}</td>
                                    <td><img id="table_user_img" src={item.userInfo.avatar_url} alt="" /></td>
                                    <td>{item.userInfo.login}</td>
                                    <td>{item.userInfo.public_repos}</td>
                                    <td className="green">
                                        <ul>
                                        {item.repoList.map((value, index) => {
                                        return index<5 ? <li key={index}>{value.name} </li>: null
                                        })
                                        }
                                        </ul>
                                    </td>
                                    <td><button id='delete_btn' onClick={(e) => {props.handleDeleteUser(e.target.parentElement.parentElement.id); props.handleShowModal("User Deleted Successfully")}} >Delete</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    );
}

export default SearchResults;
