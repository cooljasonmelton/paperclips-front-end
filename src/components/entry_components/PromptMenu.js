import React from 'react'
import { Menu, Message } from 'semantic-ui-react'



export default class PromptMenu extends React.Component {
  state = {}
  handleClick = () => {
    fetch('http://localhost:3000/prompts')
    .then(r=>r.json())
    .then(prompt => this.setState({ message: prompt.content }))
  }

  render() {
    const { message } = this.state

    return (
      <div>
        <Menu vertical>
          <Menu.Item style={{color: 'black', backgroundColor: 'white'}} onClick={this.handleClick}>Get a Prompt</Menu.Item>
          {message && <Menu.Item><Message content={message} style={{margin: '0'}} /></Menu.Item>}
        </Menu>
        
      </div>
    )
  }
}

