import React from 'react'
import './EntryContainer.css';
import Entry from './Entry'
import PromptMenu from './PromptMenu'        
import Auth from '../Auth'
import ImageAwardContainer from './ImageAwardContainer';


class EntryContainer extends React.Component{
    constructor(){
        super()
        this.state={
            wordCount: 0
        }
    }

    updateWordCount = num => {
        this.setState({wordCount: num})
    }

    render(){
        return (
            <>
                <div className="entry-container">
                    <div className="prompt-menu">
                        <PromptMenu/>
                    </div>
                    <div className="entry-div">
                        <Entry updateWordCount={this.updateWordCount}/>
                    </div>
                    <div className='award-menu'>
                        <ImageAwardContainer wordCount={this.state.wordCount}/>
                    </div>
                </div>
                <Auth/>
            </>
        )

    }
}

export default EntryContainer 