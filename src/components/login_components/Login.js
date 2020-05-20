import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';


class Login extends Component{
    state = {
        email: "", 
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const reqObj = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify(this.state)
        }

        fetch('http://localhost:3000/login', reqObj)
        .then(r=>r.json())
        .then(userObj => {
            if (userObj.error){
                alert(userObj.error)
            } else{
                const {jwt, user} = userObj
                localStorage.setItem('token', jwt);
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

    render(){
        return(
            <Form onSubmit={this.handleSubmit} style={{ paddingTop: "2.5vh", backgroundColor:"white"}}>
                <Form.Group>
                    <Form.Field>
                        <label>Email:</label>
                        <input placeholder='email@email.com' 
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password:</label>
                        <input placeholder='password' 
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </Form.Field>
                    <Button style={{margin: "2.1em 0"}} size='mini' className="login-submit" type='submit'>Login</Button>
                </Form.Group>

            </Form>
        )
    }
}


const mapDispatchToProps = dispatch => {
    return {
      login: formData => dispatch({ type: 'LOGIN_USER', payload: formData })
    };
};

const mapStateToProps = state => {
    return {
      state: state
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
