import React from 'react'
import { Menu, Message } from 'semantic-ui-react'



export default class PromptMenu extends React.Component {
  state = {}
  handleClick = () => this.setState({ message: 'You Clicked Something' })

  render() {
    const { message } = this.state

    return (
      <div>
        <Menu vertical>
          <Menu.Item onClick={this.handleClick}>Get a Prompt</Menu.Item>
        </Menu>

        {message && <Message content={message} />}
      </div>
    )
  }
}

