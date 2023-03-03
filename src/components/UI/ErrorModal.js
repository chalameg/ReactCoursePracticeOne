import React from 'react'
import Button from './Button'
import Card from './Card'
import style from './ErrorModal.module.css'
const ErrorModal = (props) => {
    const clickModalHandler = () => {
        props.onCloseModal();
    }

  return (
    <div>
        <div className={style.backdrop}/>
        <Card className={style.modal}>
            <header className={style.header}>
                <h1>{props.title}</h1>
            </header>

            <div className={style.content}>
                <p>{props.message}</p>
            </div>

            <footer className={style.actions}>
                <Button onClick={clickModalHandler}>Cancel</Button>
            </footer>
        </Card>
    </div>
  )
}

export default ErrorModal