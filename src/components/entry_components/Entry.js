import React, { Component } from 'react'
import { Form, Segment } from 'semantic-ui-react'

class Entry extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
        <Segment> 
            <Form style={{padding: "10px"}}>
                <Form.TextArea
                    style={{border: 0, minHeight: '60vh'}}
                    label=""
                    placeholder="What's up?"
                />
                <Form.Button style={{float: "right"}}> Save </Form.Button>
            </Form>
        </Segment>
    )
  }
}

export default Entry