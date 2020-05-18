import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { prettyDate, dateEntryId } from '../../date_functions/dates'


class Entry extends Component {
  state = {
    content: "",
}

componentDidMount() {
    // update content from BE
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
            userId: this.props.state.id,
            wordCount: this.state.content.split(' ').length,
            goal: this.props.state.currentGoal,
            content: this.state.content,
            date: dateEntryId() 

        })
    }
    console.log(reqObj)

    fetch('http://localhost:3000/entries', reqObj)
    .then(r=>r.json())
    .then(data => {
        console.log(data)
    })
}

  render() {
    console.log(this.props.state)

    return (
        <>
            <Segment> 
                <div className="entry-header">
                    <div className="entry-header-item"> <h3>{prettyDate()}</h3></div>
                    <div className="entry-header-item"> <h3>Word Count: {this.currentWordCount()}</h3></div>
                    <div className="entry-header-item"> <h3>Goal: { this.props.state.currentGoal }</h3> </div>
                </div>
            </Segment>
            <Segment> 
                <Form style={{padding: "10px"}} onSubmit={this.handleSubmit}>
                    <Form.TextArea
                        style={{border: 0, minHeight: '40vh', fontSize: '3vh'}}
                        name="content"
                        label=""
                        onChange={this.handleChange}
                        value={this.state.content}
                    />
                    <Form.Button type="submit" style={{float: "right"}}> Save </Form.Button>
                </Form>
            </Segment>
        </>
    )
  }
}


const mapStateToProps = state => {
    return {
      state: state.login
    }
}

const mapDispatchToProps = dispatch => {
    return {
    };
};


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Entry));
