import React from 'react'
import { useLoaderData } from 'react-router-dom'
import User from '../User/User';

const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <div className='grid grid-cols-2 gap-4 container mx-auto'>
                {users.map(user => <User user={user}></User>)}
            </div>
        </div>
    )
}

export default Users