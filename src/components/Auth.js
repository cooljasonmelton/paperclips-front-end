import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';


class Auth extends Component {
    constructor(props){
        super(props)
        if (this.props.state.login.id === "") {
            this.props.history.push('/login')           
        }
    }


    render(){
        return<></>
    }

}

const mapStateToProps = state => {
    return {
      state: state
    }
  }
  

  
  export default withRouter(connect(mapStateToProps)(Auth));
  


