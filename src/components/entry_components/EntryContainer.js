import React from 'react'
import './EntryContainer.css';
import Entry from './Entry'
import PromptMenu from './PromptMenu'        
import Auth from '../Auth'


const EntryContainer = () => {
    return (
        <>
            <div className="entry-container">
                <div className="prompt-menu">
                    <PromptMenu/>
                </div>
                <div className="entry-div">
                    <Entry/>
                </div>
            </div>
            <Auth/>
        </>

    )
}

export default EntryContainer 