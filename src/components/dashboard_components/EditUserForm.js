import React, {Component} from 'react'
import { Button, Form, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';


class EditUserForm extends Component{
    state = {
        id: "",
        name: "", 
        email: "",
        currentGoal: "",
    }

    componentDidMount(){
        const {id, name, email, currentGoal } = this.props.state.login
        this.setState({
            id: id,
            name: name, 
            email: email,
            currentGoal: currentGoal
        })

    }


    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        const reqObj = {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json' 
            },
            body: JSON.stringify(this.state)
        }

        fetch(`http://localhost:3000/users/${this.state.id}`, reqObj)
        .then(r=>r.json())
        .then(userObj => {
            const { user } = userObj
            this.props.login({
                id: user.id,
                name: user.name,
                email: user.email,
                entries: user.entries,
                current_goal: user.current_goal
            })
            window.location.reload();
        })
    }

    render(){
        return(
            <Segment style={{width: '20vw'}} className="">
                <h3> User Profile:</h3>


                <Form className="" onSubmit={this.handleSubmit} style={{backgroundColor:"white"}}>
                    <Form.Field>
                        <label>Name:</label>
                        <input 
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />

                    </Form.Field>
                    <Form.Field>
                        <label>Email:</label>
                        <input
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange} 
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Daily Work Count Goal:</label>
                        <input type="number" 
                            name="currentGoal"
                            value={this.state.currentGoal}
                            onChange={this.handleChange} 
                        />
                    </Form.Field>
                    <Button type='submit'>Update!</Button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditUserForm));
