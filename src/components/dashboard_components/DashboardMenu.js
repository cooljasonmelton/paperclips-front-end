import React from 'react'
import { Menu } from 'semantic-ui-react'
import EditUserForm from './EditUserForm'
import Analytics from './Analytics'
import { withRouter } from 'react-router-dom';


class DashboardMenu extends React.Component {
  state = {}

  componentDidMount(){
    this.setState({activeItem: 'item analytics'})
    this.setState({chartClick: false})

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

  chartClick = () =>{
    if (this.props.location.pathname === '/dashboard'){
      this.props.history.push('./line-chart')
    } else {
      this.props.history.push('./dashboard')
    }

  }

  render() {
    const { activeItem } = this.state

    return (
      <>
        <Menu vertical>
          <Menu.Item className="analytics" onClick={this.handleClick}>Analytics</Menu.Item>
          <Menu.Item className="edit" onClick={this.handleClick}>Edit Profile</Menu.Item>
        </Menu>

        {activeItem === 'item edit' && <EditUserForm/>}
        {activeItem === 'item analytics' && <Analytics chartClick={this.chartClick}/>}

      </>
    )
  }
}

export default withRouter(DashboardMenu);

