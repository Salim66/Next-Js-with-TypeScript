import React from 'react'

type Props = {
    user: User,
    key: number
}

const User = (props: Props) => {
    console.log('props', props.user.name)
  return (
    <>
        <h2 key={props.key}>{props.user.name}</h2>
    </>
  )
}

export default User