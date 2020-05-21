import React from 'react'
import { Menu } from 'semantic-ui-react'
import ImageAward from './ImageAward'
import { connect } from 'react-redux'
import { dateEntryId } from '../../date_functions/dates'

class ImageAwardContainer extends React.Component {
  state = {}

  componentDidMount(){
    const { awards, login } = this.props.state    
    if (awards.awards.length === 0 && login.currentGoal > 100){
      let numImages = Math.floor(login.currentGoal / 100)
      const Unsplash = require('unsplash-js').default;
      const unsplash = new Unsplash({ accessKey: "XQ4NalknaWeIU58k2JeaoiLmeERsdcA0ezDMFdUUMso" });         
      unsplash.photos.getRandomPhoto({ query: "cute animal", count: `${numImages}` })
        .then(r=>r.json())
        .then(pics => { 
          let picUrls = pics.map(pic => pic.urls.regular)
          this.props.awards({
            awards: picUrls
          })
        }).catch(err => {
          let picUrl = 'https://img.wallpapersafari.com/desktop/1920/1080/87/51/TkasJf.jpg'
          let picUrls = []
          for (let i = 0; i < numImages; i++) {
            picUrls.push(picUrl)
          }
          this.props.awards({
            awards: picUrls
          })
      });
    }

  }

  renderImageAwards = () => {
    const { entries } = this.props.state.login
    let todayEntry = entries.filter(entry => entry.created_at.substring(0,10) === dateEntryId())[0]
    if (todayEntry){
      const { wordCount } = this.props
      const wordCountHundred = Math.floor(wordCount / 100) 
      const goalCountHundred = Math.floor(this.props.state.login.currentGoal / 100) 
      const numImages = wordCountHundred < goalCountHundred ? wordCountHundred : goalCountHundred
      const imgAwards = []
      for (let i = 0; i < numImages; i++) {
        imgAwards.unshift(<ImageAward key={i} num={i} img={this.props.state.awards.awards[i]}/>)
      }

      if (wordCount >= this.props.state.login.currentGoal) {
        imgAwards.unshift(
        <>
          <Menu.Item>
            Congrats, You Hit Your Goal!
          </Menu.Item>
          <Menu.Item style={{}}>
            <iframe 
            width="175"
            src="https://www.youtube.com/embed/GbQ5OveB6TY?controls=0;&autoplay=1" 
            frameborder="0" 
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
          </Menu.Item>
        </>
        )
      }
      return imgAwards
    } 
  } 

  render() {
    return (
      <div>
        <Menu vertical>
          <Menu.Item style={{textAlign: "center"}}>
            Awards
          </Menu.Item>
          {this.renderImageAwards()}
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

const mapDispatchToProps = dispatch => {
  return {
    awards: formData => dispatch({ type: 'UPDATE_AWARDS', payload: formData })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageAwardContainer);
