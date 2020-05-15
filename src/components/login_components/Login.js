import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'

class Login extends Component{
    state = {
        email: "jason@email.com", 
        password: "jason"
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)

        const reqObj = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify(this.state)
        }

        fetch('http://localhost:3000/login', reqObj)
        .then(r=>r.json())
        .then(user => {
            console.log(user)
            localStorage.setItem('token', user.jwt);
        })
    }

    render(){
        return(
            <Form onSubmit={this.handleSubmit} style={{backgroundColor:"white"}}>
                <Form.Group>
                    <Form.Field>
                        <label>Email:</label>
                        <input placeholder='email@email.email' 
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


export default Login