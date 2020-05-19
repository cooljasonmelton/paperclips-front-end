import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';

import './main.scss' 
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { prettyDate, dateEntryId } from '../../date_functions/dates'


// sort entries by 'met goal'
// create event for each day 'missed' or 'achieved'
// later badges when a certain amount of dates hit in a row
// have some container for badges earned


class Calendar extends React.Component {
  state = {
    events: []
  }

  getFirstDay = () => {
    const { entries } = this.props.state.login
    if (entries.length > 0){
      return entries[0].created_at.substring(0, 10)

    }
  }

  renderFirstDay = () =>{
    const { entries } = this.props.state.login
    if (entries.length > 0){

      let firstWroteToday = [entries[0]].map(entry => {
        return { title: '** FIRST DAY **', date: entry.created_at.substring(0, 10)}
      })
      return firstWroteToday
    }
  }

  renderCompletedGoal = () =>{
    const { entries } = this.props.state.login
    if (entries.length > 0){
      return entries.map(entry => {
        if (entry.wordcount >= entry.goal){
          return { title: '** HIT GOAL! **', date: entry.created_at.substring(0, 10)}
        } return {}
      })
    }
  }
  renderWroteToday = () =>{
    const { entries } = this.props.state.login
    if (entries.length > 0){
      return entries.map(entry => {
        return { title: 'WROTE TODAY', date: entry.created_at.substring(0, 10)}
      })
    }
  }

  handleDateClick = () => {
    console.log('click')
  }

  render() {
    return (    
      <FullCalendar 
      plugins={[ dayGridPlugin, interactionPlugin]} 
      header={{
        left:   'title',
        center: '',
        right:  'today prev,next'
      }}
      dateClick={this.handleDateClick}
      defaultView="dayGridMonth" 
      eventSources={[
        {
          events: this.renderFirstDay(),
          color: "green", 
          textColor: "white"

        },
        {
          events: this.renderWroteToday(),
          color: "gray", 
          textColor: "white"

        },
        {
          events: this.renderCompletedGoal(),
          color: "blue", 
          textColor: "white"
        }
      ]}
        
    />
    )
  }

}

const mapStateToProps = state => {
  return {
    state: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Calendar));
