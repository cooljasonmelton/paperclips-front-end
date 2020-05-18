import React from 'react'
import './EntryContainer.css';
import Entry from './Entry'
import { Segment } from 'semantic-ui-react'
import PromptMenu from './PromptMenu'
import EntryHeader from './EntryHeader';

const EntryContainer = () => {
    return (
        <div className="entry-container">
            <div className="prompt-menu">
                <PromptMenu/>
            </div>
            <div className="entry-div">
                <Entry/>
            </div>
        </div>
    )
}

export default EntryContainer 