import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'

class Entry extends Component {
  state = {
    content: "", 
}

currentDate = () => {
    let today = new Date();

    let dd = String(today.getDate()).padStart(2, '0');
    let thisDay = String(today.getDate())

    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let thisMonth = months[today.getMonth()]

    let yyyy = today.getFullYear();

    return today = thisMonth + ' ' + thisDay + ', ' + yyyy;
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
    console.log(this.state)

    // const reqObj = {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json' 
    //     },
    //     body: JSON.stringify(this.state)
    // }

    // fetch('http://localhost:3000/entry/:id', reqObj)
    // .then(r=>r.json())
    // .then(user => {
    //     console.log(user)
    //     localStorage.setItem('token', user.jwt);
    // })
}

  render() {
    return (
        <>
            <Segment> 
                <div className="entry-header">
                    <div className="entry-header-item"> <h3>{this.currentDate()}</h3></div>
                    <div className="entry-header-item"> <h3>Goal: 'make me dynamic'</h3> </div>
                    <div className="entry-header-item"> <h3>Current: {this.currentWordCount()}</h3></div>
                </div>
            </Segment>
            <Segment> 
                <Form style={{padding: "10px"}} onSubmit={this.handleSubmit}>
                    <Form.TextArea
                        style={{border: 0, minHeight: '40vh'}}
                        name="content"
                        label=""
                        onChange={this.handleChange}
                        value={this.state.content}
                    />
                    <Form.Button style={{float: "right"}}> Save </Form.Button>
                </Form>
            </Segment>
        </>
    )
  }
}

export default Entry