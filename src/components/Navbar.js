import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import Login from './login_components/Login'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
  state = { activeItem: 'dashboard' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleSignOut = () => {
    localStorage.removeItem("token")
    window.location.reload();
  }

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

          <Menu.Item>
            <Button size="mini" onClick={this.handleSignOut}>Sign Out</Button>
          </Menu.Item>


          <Menu.Item>
            <Login/>
          </Menu.Item >

        </Menu.Menu>
      </Menu>
    )
  }
}




{/* 
when doing navlinks

<Menu.Item as={NavLink} to="/" name="signout">
  <Button onClick={this.handleSignOut}>Sign Out</Button>
</Menu.Item> 

*/}
