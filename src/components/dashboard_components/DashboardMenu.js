import React from 'react'
import { Menu, Message } from 'semantic-ui-react'
import EditUserForm from './EditUserForm'
import Analytics from './Analytics'

export default class DashboardMenu extends React.Component {
  state = {}

  componentDidMount(){
    this.setState({activeItem: 'item analytics'})
  }

  handleClick = e => {
    if (this.state.activeItem === e.target.className) {
      this.setState({ message: null, activeItem: ''})
    } else if (e.target.className === 'item analytics'){
      this.setState({ message: 'Analytics', activeItem: 'item analytics' })
    } else if (e.target.className === 'item edit'){
      this.setState({ message: 'Update Information:', activeItem: 'item edit'})
    }
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu vertical>
          <Menu.Item className="analytics" onClick={this.handleClick}>Analytics</Menu.Item>
          <Menu.Item className="edit" onClick={this.handleClick}>Edit Profile</Menu.Item>
        </Menu>

        {activeItem === 'item edit' && <EditUserForm/>}
        {activeItem === 'item analytics' && <Analytics/>}

      </div>
    )
  }
}


