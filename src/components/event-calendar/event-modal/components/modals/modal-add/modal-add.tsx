import React, { FC } from 'react'
import { Container, Input, Label,LineInput,Textarea} from './modal-add.styled'
import {EventModal} from '../../../event-modal'
import { IModalProps } from './modal-add.types';
import { modalActionCreator } from '../../../../../../store/reducers/modal/action-creators';
import { EventsActionCreator } from '../../../../../../store/reducers/events/action-creators';
import { useTypesSelector } from '../../../../../../hooks/useTypedSelector';
import {nanoid} from 'nanoid'
export const ModalAdd:FC<IModalProps> = ({dispatch}) => {
  const [title,setTitle]=React.useState('');
  const [description,setDescription]=React.useState('');
  const {selected}=useTypesSelector(state=>state.event);

  const closeModalAdd=()=>{
    dispatch(modalActionCreator.SetModalAdd(false));
  }

  const actionModalAdd=()=>{
    dispatch(EventsActionCreator.AddEvent({day:selected!.day,month:selected!.month,title,description,id:nanoid(5),typeEvent:'myEvent',year:selected!.year}))
    closeModalAdd();
  }
  return (
    <EventModal
            footer
            action={actionModalAdd}
            close={closeModalAdd}
            height={330}
            width={600}
            leftBttn='OK'
            rightBttn='Cancel'
            title='Test modal'
            >
            <Container>
                <LineInput>
                <Label>
                    Название события
                </Label>
                 <Input value={title} onChange={e=>setTitle(e.target.value)}/>
                </LineInput>
            <LineInput>
                <Label>
                    Описание событие
                </Label>
                <Textarea value={description} onChange={e=>setDescription(e.target.value)}/>
                </LineInput>
            </Container>
           
    </EventModal>
  )
}

