import React from 'react'
import './UserCard.css'

const HotelCard = ({user}) => {
    return (
        <div className='card-container'>

            <div className='card-header'>
                <img src={user.avatar} alt='User Avatar' />
            </div>

            <div className='card-body'>
                <h2>{user.first_name} {user.last_name}</h2>
                <p>{user.email}</p>

            </div>

        </div>
    )
}

export default HotelCard