import React from 'react'
import style from './Users.module.css'

const Users = (props) => {
  return (
    <div className={style.users}>
        {props.users.map(user => {
            return (
                <div key={Math.random().toString()}>{user.username} {" "} ({user.age} years old)</div>
            )
        })}
    </div>
  )
}

export default Users