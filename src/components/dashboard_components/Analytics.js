import React from 'react'
import { Segment } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import { pretifyThisDate } from '../../date_functions/dates';
import LineChart from './LineChart'


const Analytics = props => {
    const numberWithCommas = x => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const { entries } = props.state.login

    let allWords = []
    entries.map(e => {
        let onlyWords = e.content.match(/\b(\w+)\b/g)
        allWords += onlyWords
    })

    let totalWords = allWords.length

    let longestEntry = { wordcount: 0, created_at: null}
    entries.forEach(e => {
        if (e.wordcount > longestEntry.wordcount){
            longestEntry = e
        }
    })

 
    return(
        <Segment style={{width: '20vw' }} className="">
            <h3> Analytics:</h3>
            <Segment><LineChart/></Segment>
            <Segment>Total Words: <br/> {numberWithCommas(totalWords)}</Segment>
            <Segment>Longest Entry Date: <br/> {pretifyThisDate(longestEntry.created_at)}</Segment>
            <Segment>Longest Entry Word Count: <br/> {numberWithCommas(longestEntry.wordcount)}</Segment>            
        </Segment>
    )
}

const mapStateToProps = state => {
    return {
      state: state
    }
}

export default withRouter(connect(mapStateToProps)(Analytics));
