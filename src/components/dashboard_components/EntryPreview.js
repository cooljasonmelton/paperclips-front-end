import React from 'react'
import { Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'




const EntryPreview = props => {
    const {content, wordcount, goal, created_at} = props.state.datePreview

    const getDate = () => {
        let theDate = created_at.substring(0,10)
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let theMonth = months[parseInt(theDate.split('-')[1]) - 1]
        let theDay = parseInt(theDate.split('-')[2]);
        let theYear = parseInt(theDate.split('-')[0]);
        return theDate = theMonth + ' ' + theDay + ', ' + theYear;
    }

    return (
        <div className="entry-preview-div">
            <Segment> 
                <div className="entry-header">
                    <div className="entry-header-item" > 
                        <a className='calendar-link' onClick={props.togglePreview}><h3>{getDate()}</h3></a>
                    </div>
                    <div className="entry-header-item"> 
                        <h3>Word Count: {wordcount}</h3>
                    </div>
                    <div className="entry-header-item"> 
                        <h3>Goal: {goal}</h3> 
                    </div>
                </div>
            </Segment>
            <Segment>
                <p>
                    {content}
                </p>

            </Segment>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      state: state
    }
  }
  
  
export default connect(mapStateToProps)(EntryPreview);
  

