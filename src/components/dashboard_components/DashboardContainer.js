import React from 'react'
import './DashboardContainer.css';
import Calendar from './Calendar'
import DashboardMenu from './DashboardMenu'
import { Segment } from 'semantic-ui-react'
import Auth from '../Auth'



const DashboardContainer = () => {
    return (
        <>
            <div className='dashboard-container' style={{backgroundColor: ""}}>
                <div className='dash-menu'>
                    <DashboardMenu />
                </div>
                <div className='dash-calendar'>
                    <Segment className='calendar-segment'>
                        <Calendar/>
                    </Segment>
                </div>
            </div>
            <Auth/>
        </>
    )
}

export default DashboardContainer
