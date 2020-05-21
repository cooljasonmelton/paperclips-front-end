import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { prettyDate, dateEntryId } from '../../date_functions/dates'


class Entry extends Component {
  state = {
    content: ""
}

componentDidMount(){
    this.getContent()
}

getContent = () => {
    let { entries } = this.props.state.login
    let todayEntry = entries.filter(entry => {
        return entry.created_at.substring(0,10) === dateEntryId()
    })
    if (todayEntry.length > 0){
        this.setState({
            content: todayEntry[0].content
        })
    }
}

currentWordCount = () => {
    if (this.state.content !== "") {
        return this.state.content.split(' ').length
    } else {
        return 0
    }
}

handleChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleSubmit = e => {
    e.preventDefault()

    const reqObj = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json' 
        },
        body: JSON.stringify({
            userId: this.props.state.login.id,
            wordCount: this.state.content.split(' ').length,
            goal: this.props.state.login.currentGoal,
            content: this.state.content,
            date: dateEntryId() 
        })
    }
    fetch('http://localhost:3000/entries', reqObj)
    .then(r=>r.json())
    .then(entry => {
        this.props.login({
            entry: entry
        })
        this.getContent()
    })
}

  render() {
    return (
        <>
            <Segment> 
                <div className="entry-header">
                    <div className="entry-header-item"> <h3>{prettyDate()}</h3></div>
                    <div className="entry-header-item"> <h3>Word Count: {this.currentWordCount()}</h3></div>
                    <div className="entry-header-item"> <h3>Goal: { this.props.state.login.currentGoal }</h3> </div>
                </div>
            </Segment>
            {!this.props.state.login.entries ?
            <h4>LOADING...</h4>
            :
            <Segment> 
                <Form style={{padding: "10px"}} onBlur={this.handleSubmit} >
                    <Form.TextArea
                        style={{border: 0, minHeight: '60vh', fontSize: '2.25vh'}}
                        name="content"
                        label=""
                        onChange={this.handleChange}
                        value={this.state.content}
                    />
                    <Form.Button  type="submit" style={{float: "right"}}> Save </Form.Button>
                </Form>
            </Segment>
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
      login: entry => dispatch({ type: 'UPDATE_ENTRY', payload: entry })
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Entry));
