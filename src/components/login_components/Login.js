import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'

class Login extends Component{
    state = {
        email: "", 
        password: ""
    }

    handleChange = () => {

    }

    handleSubmit = () => {

    }

    render(){
        return(
            <Form size={"mini"} key={"mini"} style={{backgroundColor:"white"}}>
                <Form.Group>
                    <Form.Field>
                        <label>Email:</label>
                        <input placeholder='Email' />
                    </Form.Field>
                    <Form.Field>
                        <label>Password:</label>
                        <input type="password" placeholder='Password' />
                    </Form.Field>
                    <Button size='mini' className="login-submit" type='submit'>Login</Button>
                </Form.Group>
            </Form>
        )
    }
}


export default Login