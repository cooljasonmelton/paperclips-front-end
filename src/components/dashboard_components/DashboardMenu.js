import React from 'react'
import { Menu, Message } from 'semantic-ui-react'



export default class DashboardMenu extends React.Component {
  state = {}
  handleClick = () => this.setState({ message: 'You Clicked' })

  render() {
    const { message } = this.state

    return (
      <div>
        <Menu vertical>
          <Menu.Item onClick={this.handleClick}>Analytics</Menu.Item>
          <Menu.Item onClick={this.handleClick}>Edit Profile</Menu.Item>
        </Menu>

        {message && <Message content={message} />}
      </div>
    )
  }
}


