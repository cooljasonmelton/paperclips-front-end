import React, { Component } from 'react'
import { Segment } from 'semantic-ui-react'

class EntryHeader extends Component {
  state = {}

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
        <Segment>
            <h3> May 15th, Goal: 500, Current: 346</h3>

        </Segment>

    )
  }
}

export default EntryHeader