import React from 'react'
import LineChart from './LineChart'
import { Segment, Button } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom';



const LineChartContainer = props =>{
    const handleClick = () => {
        props.history.push('./dashboard')

    }
    return (
        <div

        >
            <Segment 
                style={{
                    backgroundColor: "#E3E4DB", 
                    minHeight: '100vh', 
                    padding: '5vh 20vw', 
                }}
            >
                <Segment style={{
                    textAlign: 'center'
                    }}
                >
                    <h3>Writing Progress</h3>
                </Segment>
                <LineChart />
                <Button onClick={handleClick}>Return to Dashboard</Button>
            </Segment>
        </div>

    )

}

export default withRouter(LineChartContainer);