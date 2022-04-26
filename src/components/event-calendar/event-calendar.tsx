import { Calendar } from 'antd'
import React, { FC } from 'react'
import { Months, Years } from '../../const/calendar';
import Select from '../select/select'
import {WeekDays as weekDays } from '../../const/calendar'
import { Body, Container, Top, WeekDay, WeekDays,EventsLabel, Switch,SwitchText } from './event-calendar.styled'
import {IEventProps, IEvents} from './event-calendar.types';
import {Item, Menu, TriggerEvent, useContextMenu} from 'react-contexify'
import {ContextDay } from './calendar-context-menu/caleendat-context-menu';
import { EventLabel } from './event-label/event-label';
import { EventSome } from './utils/event';
import { IEvent } from '../../models/event';
import { useDispatch } from 'react-redux';
import { useTypesSelector } from '../../hooks/useTypedSelector';
import { EventModal } from './event-modal/event-modal';
import { ModalAdd } from './event-modal/components/modals/modal-add/modal-add';
import { EventsActionCreator } from '../../store/reducers/events/action-creators';
import { ModalShare } from './event-modal/components/modals/modal-share/modal-share';
import { ISelectedDay } from '../../store/reducers/events/types';
import { ModalInfo } from './event-modal/components/modals/modal-info/modal-info';
import { ModalDelete } from './event-modal/components/modals/modal-delete/modal-delete';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './mui.scss';
import { Days } from './event-modal/components/days/days';
import { InputLogin } from '../input-login.tsx/input-login';

const MENU_ID = 'calendar'

export const EventCalendar:FC<IEventProps> = () => {
    const [value,setValue]=React.useState('');
    const [error,setError]=React.useState(false);

    const dispatch=useDispatch();
    const {modalAdd,modalDelete,modalEdit,modalInfo,modalShare}=useTypesSelector(state=>state.modal)
    const {
        currentDay,
        currentMonth
        ,currentYear
        ,selected,
        events,
    }
    =useTypesSelector(state=>state.event);
    
    const {show}=useContextMenu({
        id:MENU_ID
    })
  
    const [year,setYear]=React.useState(currentYear)
    const [month,setMonth]=React.useState(currentMonth);
    
    const oneDayMonthOnWeek=new Date(year,month,1).getDay();
    const lastDayMonthOnWeek=new Date(year,month+1,0).getDay();

    const switchNextMonth=()=>{
        if(month===11){
            setYear(year+1)
            setMonth(0)
        }else{
            setMonth(month+1)
        }
    }
    const switchPrevMonth=()=>{
        if(month===0){
            setYear(year-1)
            setMonth(11)
        }else{
            setMonth(month-1)
        }
    }

    // const prevDaysMonth=React.useMemo(()=>{
    //     const countDaysPrevMonth=oneDayMonthOnWeek===0?6:oneDayMonthOnWeek-1;
    //     const prevMontLastDays=new Date(year,month,0).getDate();

    //     return new Array(countDaysPrevMonth).fill(1).map((day,index)=>{
    //         return <WeekDay 
    //         key={day+index} 
    //         current={currentDay===(prevMontLastDays-countDaysPrevMonth+index)
    //          && year===currentYear && month===currentMonth}>
    //         {prevMontLastDays-countDaysPrevMonth+index}</WeekDay>
    //     })
    // },[year,month]);    

    // const nextDaysMonth=React.useMemo(()=>{
    //     return new Array(7-lastDayMonthOnWeek).
    //     fill(1).map((day,index)=>{
    //         return <WeekDay
    //         key={day+index}
    //          current={currentDay===index+1 && year===currentYear && month===currentMonth}>
    //              {index+1}
    //          </WeekDay>
    //     })
    // },[year,month])

    const days=React.useMemo(()=>{
        const countDaysPrevMonth=oneDayMonthOnWeek===0?6:oneDayMonthOnWeek-1;
        const prevMontLastDays=new Date(year,month,0).getDate();
        const prev=new Array(countDaysPrevMonth).fill(1).map((day,index)=>{
            return prevMontLastDays-countDaysPrevMonth+index
        })
        const next=new Array(7-lastDayMonthOnWeek).fill(1).map((day,index)=>{
            return index+1
        })
        const current=new Array(new Date(year,month+1,0).getDate()).fill(1).map((el,index)=>{
            return index+1
        })
        
      return [...prev,...current,...next]
        // return new Array(new Date(year,month+1,0).getDate()).fill(1).map((el,i)=>{
        //     const displayEvents:IEvents[]=[];
        //     const  eventsLabels:IEvent[]=[];
        //     events.forEach(el=>{
        //         if(el.year===year && el.month===month && el.day===i+1){
        //             if(el.typeEvent==='myEvent' || 'holiday') { 
        //                 EventSome(displayEvents,el.typeEvent,el);
        //             }else{
        //                 displayEvents.push(el);
        //             }   
        //             eventsLabels.push(el);
        //         }
        //     })
        //     return <WeekDay
        //       current={currentDay===i+1 && year===currentYear && month===currentMonth}
        //       onContextMenu={(e)=>displayMenu(e,{day:i+1,month,year,events:eventsLabels})} key={i}>{i+1}
        //           <EventsLabel>
        //         {displayEvents.map(el=>{
        //             return  <EventLabel 
        //             key={el.id}
        //             count={el.count ? el.count:1}
        //             typeEvent={el.typeEvent}/>                    
        //         })}
        //          </EventsLabel> 
        //     </WeekDay>
        // })
     },[year,month,events])

  function displayMenu(e: TriggerEvent,value:ISelectedDay){
      dispatch(EventsActionCreator.SetSelected(value))
      e.preventDefault();
    show(e);
  }

  return (
      <>
    <Container>
        <Switch  onClick={switchPrevMonth} left='50px' top='50%'><ArrowForwardIosIcon className='arrow arrow-prev'/>
        <SwitchText >Prev-month</SwitchText> </Switch>
        <Switch  onClick={switchNextMonth} right='50px' top='50%'><ArrowForwardIosIcon  className='arrow arrow-next' />
        <SwitchText>Next-month</SwitchText>
        </Switch>
        <ContextDay selected={selected} id={MENU_ID}/>
        {modalDelete && <ModalDelete 
        selected={selected}
        dispatch={dispatch}
        />}
        {modalInfo && <ModalInfo
            dispatch={dispatch}
        />}
        {modalAdd && <ModalAdd 
         dispatch={dispatch}
        />}
        {modalShare && <ModalShare
              dispatch={dispatch}
        />}
        <Top>
            <InputLogin error={error} setError={setError} setValue={setValue} value={value} />
            <Select
            height='40px'
            width='100px'
            value={year}
             setValue={setYear}
             defaultLabel={year} 
             arrOptions={Years()}/>
              <Select
              width='150px'
              height='40px'
              value={month}
             setValue={setMonth}
             defaultLabel={Months[month].label} 
             arrOptions={Months}/>
        </Top>
        <WeekDays>
            {weekDays.map(i=>(
                <WeekDay current={false} key={i}>{i}</WeekDay>
            ))}
        </WeekDays>
        <Body>
         <Days days={days} displayMenu={displayMenu} month={month} year={year}/>
        </Body>
    </Container>
    </>
  )
}
