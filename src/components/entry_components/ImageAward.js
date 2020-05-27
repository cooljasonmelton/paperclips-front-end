import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'

class ImageAward extends React.Component {    
    state = {
        imageUrl: ""
    }

    render(){
        return (
            <>
                <Segment style={{width: '17vw' }} >
                    <h4>{(this.props.num + 1) * 100} Words</h4>
                    <img src={this.props.img} alt={this.props.num} text='' style={{width: '15vw', height: 'auto', margin: "0 auto"}} />
                </Segment>
            </>
        ) 
    }


}

export default ImageAward
