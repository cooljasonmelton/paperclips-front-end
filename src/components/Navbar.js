import React, { Component } from 'react'
import { Menu, Button } from 'semantic-ui-react'
import Login from './login_components/Login'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { dateEntryId } from '../date_functions/dates'
import Title from './Title'


class Navbar extends Component {
  state = { activeItem: '' }
  
  handleItemClick = (e, { name }) => {
    if (name === 'dashboard') {
      this.props.history.push('/dashboard')

    } else if (name === 'write') {
      this.props.history.push(`/entry/${dateEntryId()}`)
    }
  }

  handleSignOut = () => {
    this.setState({activeItem: ''})
    localStorage.removeItem("token")
    this.props.history.push("/login")
    this.props.logout()
  }

  setActiveItem = () => {
    const { pathname } = this.props.history.location
    if (pathname === '/dashboard'){
      this.state.activeItem = 'dashboard'
    } else if (pathname.substring(0, 6) === '/entry'){
      this.state.activeItem = 'write'
    } else {
      this.state.activeItem = ''
    }
  }


  render() {
    this.setActiveItem()
    const { activeItem } = this.state
    return (      
        <Menu className="menu1" attached='top' tabular style={{backgroundColor: "white"}}>
          <div className='navbar-title'>
            <Title/>
          </div>

          {this.props.state.login.id ? 
          <>
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
          </>
          :
          <div></div>
          }
          
          <Menu.Menu position='right'>

          {this.props.state.login.id ?
            <Menu.Item>
              <Button onClick={this.handleSignOut}>Sign Out</Button>
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

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch({ type: 'LOGOUT_USER' })
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Navbar));
