import React, { FC } from 'react'
import { IEventModalProps } from './event-modal.types'
import { Body, Button, Close, Container, Footer, Top } from './event.modal.styled'
import ReactDOM from 'react-dom';

export const EventModal:FC<IEventModalProps> = 
({children,close,leftBttn,rightBttn,title,footer,height,width,action,disabled}) => {
    
  return ReactDOM.createPortal(
   <Container width={width} height={height} >
        <Close onClick={close}>x</Close>
        <Top>{title}</Top>
        <Body>
            {children}
        </Body>
        {footer && <Footer>
                <Button disabled={disabled} onClick={action}>{leftBttn}</Button>
                <Button onClick={close}>{rightBttn}</Button>
            </Footer>}
    </Container>,
    document.body
  )
}
