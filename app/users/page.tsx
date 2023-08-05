import User from '@/components/User';
import getAllUser from '@/libs/getAllUser'
import React from 'react'

type Props = {}

const Users = async (props: Props) => {
    const users: Promise<User[]> = getAllUser();
    const usersData = await users;

    console.log('users', usersData);
  return (
    <>
    {
        usersData.map((user, index) => {
           return <User user={user} key={index} />
        })
    }
    </>
  )
}

export default Users