import React from 'react'
import {Container,Day,EventsLabel} from './days.styled'
import { IDaysProps } from './days.types'
import {EventLabel} from '../../../event-label/event-label';
import { IEvent } from '../../../../../models/event';
import { IEvents } from '../../../event-calendar.types';
import { useTypesSelector } from '../../../../../hooks/useTypedSelector';
import { EventSome } from '../../../utils/event';

export const Days:React.FC<IDaysProps> = ({days,month,year,displayMenu}) => {
  const {events,currentDay,currentYear,currentMonth}=useTypesSelector(state=>state.event)
  return (
    <Container>
        {days.map(day=>{
             const displayEvents:IEvents[]=[];
             const allEventsDay:IEvent[]=[];
           let appropriateYear=events.find(event=>event.year===year)
           if(!appropriateYear) return;
           let appropriateMonth=appropriateYear.month.find(day=>day.month===month)
           if(!appropriateMonth) return;
           appropriateMonth.events.forEach(event=>{
                if(event.day===day){
                  if(event.typeEvent==='holiday' || event.typeEvent==='myEvent'){
                    EventSome(displayEvents,event.typeEvent,event)
                  }else{
                    displayEvents.push(event)
                  }
                  allEventsDay.push(event);
                } 
               })
          return <Day 
          onContextMenu={e=>displayMenu(e,{day,month,year,events:allEventsDay})}
          current={currentYear===year && month===currentMonth && currentDay===day}>
            {day}
            <EventsLabel>
               {displayEvents.map(el=>{
                 return   <EventLabel 
                 key={el.id}
                 count={el.count ? el.count:1}
                 typeEvent={el.typeEvent}/>  
               })}
            </EventsLabel>
          </Day>
        })}
    </Container>
  )
}
