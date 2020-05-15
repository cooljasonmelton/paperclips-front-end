import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import './main.scss' 

// sort entries by 'met goal'
// create event for each day 'missed' or 'achieved'
// later badges when a certain amount of dates hit in a row
// have some container for badges earned


export default class Calendar extends React.Component {

  render() {
    return (    
      <FullCalendar 
      defaultView="dayGridMonth" 
      plugins={[ dayGridPlugin ]} 
      events={[
          { title: 'event 1', date: '2020-05-15' },
          { title: 'event 2', date: '2020-05-15' }
      ]}/>
    )
  }

}