import React, { useEffect, useState } from 'react'
import "./Users.scss"
const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => setUsers(data))
            .catch((error) => console.error('Error fetching users:', error));
        }, []);


    return (
        <div className='user-container'>
            {users.map((user, index) => {
                if(index < 5){ 
                    return(
                        <div className='user-data'>
                            <div className='user-id'>User Id: {user.id}</div>
                            <div className='user-name'>User Name: {user.name}</div>
                            <div className="username">Username: {user.username}</div>
                            <div className="email">Email: {user.email}</div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Users