import React from 'react'
import UserCard from '../UserCard/UserCard'
import './UserList.css'

const UserList = ({ userData }) => {

    return (
        <div className='user-list-container'>
            {
                userData.map((user, index) => {
                    return <UserCard user={user} key={index} />
                })
            }
        </div>


    )
}

export default UserList