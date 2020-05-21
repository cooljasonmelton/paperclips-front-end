import React, {Component} from 'react'
import { Segment, Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'


class SignUp extends Component{
    state = {
        name: "", 
        email: "",
        currentGoal: "",
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
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                user: {
                    name: this.state.name,
                    email: this.state.email,
                    current_goal: this.state.currentGoal,
                    password: this.state.password
                }
            })
        }

        fetch('http://localhost:3000/users', reqObj)
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
            <Segment className="signup-container">

                <Form className="signup" onSubmit={this.handleSubmit} style={{backgroundColor:"white"}}>
                    <Form.Field>
                        <label>Name:</label>
                        <input placeholder='Emily Dickinson' 
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />

                    </Form.Field>
                    <Form.Field>
                        <label>Email:</label>
                        <input placeholder='email@email.com'
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange} 
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Daily Work Count Goal:</label>
                        <input type="number" 
                            placeholder='500'
                            name="currentGoal"
                            value={this.state.currentGoal}
                            onChange={this.handleChange} 
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password:</label>
                        <input type="password" 
                            placeholder='password' 
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                            autoComplete="new-password"
                        />
                    </Form.Field>
                    <Button type='submit'>Sign Up!</Button>
                </Form>
            </Segment>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
