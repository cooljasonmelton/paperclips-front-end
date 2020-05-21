import React from 'react'
import { Menu, Message } from 'semantic-ui-react'
import ImageAward from './ImageAward'
import { connect } from 'react-redux'
import { dateEntryId } from '../../date_functions/dates'



class PromptMenu extends React.Component {
  state = {}

  handleClick = () => {
    fetch('http://localhost:3000/prompts')
    .then(r=>r.json())
    .then(prompt => this.setState({ message: prompt.content }))
  }

  renderImageAwards = () => {
    const { entries } = this.props.state.login

    let todayEntry = entries.filter(entry => entry.created_at.substring(0,10) === dateEntryId())[0]

    if (todayEntry){
      const numImages = Math.floor(todayEntry.wordcount / 100)
      const imgAwards = []
      for (let i = 0; i < numImages; i++) {
        imgAwards.push(<ImageAward key={i} num={i + 1 + '00'}/>)
      }
      return imgAwards
    } 
  }

  render() {
    const { message } = this.state
    return (
      <div>
        <Menu vertical>
          <Menu.Item style={{color: 'black', backgroundColor: 'white'}} onClick={this.handleClick}>Get a Prompt</Menu.Item>
          {message && <Menu.Item><Message content={message} style={{margin: '0'}} /></Menu.Item>}
        </Menu>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    state: state
  }
}

export default connect(mapStateToProps)(PromptMenu);
