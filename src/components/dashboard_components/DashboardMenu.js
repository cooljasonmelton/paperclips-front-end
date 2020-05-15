import React from 'react'
import { Menu, Message } from 'semantic-ui-react'



export default class DashboardMenu extends React.Component {
  state = {}
  handleClick = () => this.setState({ message: 'You Clicked Something' })

  render() {
    const { message } = this.state

    return (
      <div>
        <Menu vertical>
          <Menu.Item onClick={this.handleClick}>Set Writing Goal</Menu.Item>
          <Menu.Item onClick={this.handleClick}>Trophy Room</Menu.Item>
          <Menu.Item onClick={this.handleClick}>Update Profile</Menu.Item>
        </Menu>

        {message && <Message content={message} />}
      </div>
    )
  }
}



// SAMPLE OF MENU

// handleClick = () => this.setState({ message: 'onClick handled' })

// render() {
// const { message } = this.state

// return (
//     <div>
//     <Menu vertical>
//         <Menu.Item href='//google.com' target='_blank'>
//         Visit Google
//         </Menu.Item>
//         <Menu.Item link>Link via prop</Menu.Item>
//         <Menu.Item onClick={this.handleClick}>Javascript Link</Menu.Item>
//     </Menu>

//     {message && <Message content={message} />}
//     </div>
