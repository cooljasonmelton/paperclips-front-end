import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class Title extends Component{

    componentDidMount(){
        const token = localStorage.token;
        if (token) {
          return fetch("http://localhost:3000/profile", {
            method: "GET",
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
              'Authorization': `Bearer ${token}`
            }
          })
            .then(r => r.json())
            .then(userObj => {
              if (userObj.error) {
                localStorage.removeItem("token")
              } else {
                const { user } = userObj
                    this.props.login({
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        entries: user.entries,
                        current_goal: user.current_goal
                    })
                  this.props.history.push('/dashboard')
              }
            })
        }
    }
    handleClick = () => {
      window.location.reload()
      this.props.history.push('/dashboard')
    }

    render(){
        return (
            <div onClick={this.handleClick} className="title-container">
                <img className="title-pic" 
                    src={process.env.PUBLIC_URL + '/paperclips.jpeg'} 
                    alt="paperclips"
                    />
                <h1 className="title-text">paperclips</h1>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    login: formData => dispatch({ type: 'LOGIN_USER', payload: formData })
})

export default withRouter(connect(null, mapDispatchToProps)(Title));
