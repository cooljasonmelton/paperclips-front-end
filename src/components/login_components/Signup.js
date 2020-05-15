import React, {Component} from 'react'
import { Button, Form } from 'semantic-ui-react'

class SignUp extends Component{
    state = {
        name: "", 
        email: "",
        currentGoal: 500,
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
        .then(user => {
            console.log(user)
            localStorage.setItem('token', user.jwt);
        })

    }

    render(){
        return(
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
                    <input placeholder='writingdude@email.com'
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
                        placeholder='p@s$w0rD' 
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />
                </Form.Field>
                <Button type='submit'>Sign Up!</Button>
            </Form>
        )
    }
}


export default SignUp


// to check jwt token

// fetch('http://localhost:3000/api/v1/profile', {
//   method: 'GET',
//   headers: {
//     Authorization: `Bearer <token>`
//   }
// })