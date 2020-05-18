import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import Login from './login_components/Login'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';



class Navbar extends Component {
  state = { activeItem: 'dashboard' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  handleSignOut = () => {
    localStorage.removeItem("token")
    window.location.reload();
    this.props.history.push('/login')
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

          {this.props.state.login.id ?
            <Menu.Item>
              <Button size="mini" onClick={this.handleSignOut}>Sign Out</Button>
            </Menu.Item>
            :
            <Menu.Item>
             <Login/>
            </Menu.Item >
          }
        </Menu.Menu>
      </Menu>
    )
  }
}


const mapStateToProps = state => {
  return {
    state: state
  }
}

export default withRouter(connect(mapStateToProps)(Navbar));



{/* 
when doing navlinks

<Menu.Item as={NavLink} to="/" name="signout">
  <Button onClick={this.handleSignOut}>Sign Out</Button>
</Menu.Item> 

*/}
