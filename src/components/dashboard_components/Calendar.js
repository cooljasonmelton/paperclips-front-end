import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction';
import './main.scss' 
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import EntryPreview from './EntryPreview';

class Calendar extends React.Component {
  state = {
    events: [],
    showPreview: false
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
      return [entries[0]].map(entry => {
        return { title: '** FIRST DAY **', date: entry.created_at.substring(0, 10)}
      })
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
        let eWordCount = entry.content === "" ? 0 : entry.wordcount

        return { 
        title: `${ eWordCount !== 1 ? eWordCount + ' WORDS' : eWordCount + ' WORD' } `, 
        date: entry.created_at.substring(0, 10)}
      })
    }
  }

  togglePreview = () => {
    this.setState(prevState => ({ showPreview: !prevState.showPreview}))
  }

  handleDateClick = e => {
    const { entries } = this.props.state.login

    entries.forEach(entry => {
      if (entry.created_at.substring(0,10) === e.dateStr) {
        this.props.datePreview({
          id: entry.id,
          content: entry.content,
          wordcount: entry.wordcount,
          goal: entry.goal,
          created_at: entry.created_at
        })
        this.togglePreview()
      }
    })

  }

  render() {
    return (
      <>
        {this.state.showPreview ?

        <EntryPreview togglePreview={this.togglePreview} />

        :
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
      }
    

    </>
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
    datePreview: formData => dispatch({ type: 'UPDATE_DATE_PREVIEW', payload: formData })
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Calendar));
