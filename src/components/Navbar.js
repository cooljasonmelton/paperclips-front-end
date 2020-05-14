import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import Login from './login_components/Login'

export default class Navbar extends Component {
  state = { activeItem: 'dashboard' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
        <Menu className="menu1" attached='top' tabular style={{backgroundColor: "white"}}> 
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

          {/* Conditionally render the next two items based on token */}

            <Menu.Item
              name='sign out'
              active={activeItem === 'sign out'}
              onClick={this.handleItemClick}
              >
            </Menu.Item >

            <Menu.Item
              name='log in'
              active={activeItem === 'log in'}
              onClick={this.handleItemClick}
            >
              <Login/>
            </Menu.Item >

          </Menu.Menu>
        </Menu>
    )
  }
}