import React from 'react'
import LineChart from './LineChart'
import { Segment } from 'semantic-ui-react'


const LineChartContainer = () =>{
    return (
        <Segment style={{backgroundColor: "#E3E4DB", minHeight: '100vh'}}>
            <LineChart />
        </Segment>

    )

}

export default LineChartContainer