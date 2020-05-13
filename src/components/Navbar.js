import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Navbar extends Component {
  state = { activeItem: 'dashboard' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Menu className="menu1" attached='top' tabular style={{backgroundColor: "#F6FFEE"}}> 
          <Menu.Item 
            name='dashboard'
            active={activeItem === 'dashboard'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='write'
            active={activeItem === 'write'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='sign out'
              active={activeItem === 'sign out'}
              onClick={this.handleItemClick}
              >
            </Menu.Item >
          </Menu.Menu>
        </Menu>
    )
  }
}