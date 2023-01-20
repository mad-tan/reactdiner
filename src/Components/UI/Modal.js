import React from 'react'
import  ReactDOM  from 'react-dom'

import classes from './Modal.module.css'

const Backdrop = (props) =>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const OverLay = (props) =>{
    return <div>
        <div className={classes.modal}>{props.children}</div>
    </div>
}

const portalElement = document.getElementById("overlays")
const Modal = (props) => {
  return (
    <>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}/>,portalElement)}
    {ReactDOM.createPortal(<OverLay>{props.children}</OverLay>,portalElement)}
    </>
  )
}

export default Modal