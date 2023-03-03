import React from 'react'
import Card from '../UI/Card'
import style from './Users.module.css'

const Users = (props) => {
  return (
    <Card className={style.users}>
        {props.users.map(user => {
            return (
                <div key={Math.random().toString()}>{user.username} {" "} ({user.age} years old)</div>
            )
        })}
    </Card>
  )
}

export default Users