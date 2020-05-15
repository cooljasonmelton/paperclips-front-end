import React from 'react'
import Calendar from './Calendar'
import DashboardMenu from './DashboardMenu'
import { Segment } from 'semantic-ui-react'


const DashboardContainer = () => {
    return (
        <div className='dashboard-container'>
            <div className='dash-menu'>
                <DashboardMenu />
            </div>
            <div className='dash-calendar'>
                <Segment >
                    <Calendar/>
                </Segment>
            </div>
        </div>
    )
}

export default DashboardContainer