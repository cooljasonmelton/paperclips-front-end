import React, {Component} from 'react'
import { Button, Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';


class Analytics extends Component{


    render(){
        return(
            <Segment style={{width: '20vw'}} className="">
                <h3> Analytics:</h3>


                
            </Segment>
        )
    }
}

const mapStateToProps = state => {
    return {
      state: state
    }
}

export default withRouter(connect(mapStateToProps)(Analytics));
