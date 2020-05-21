import React from 'react'
import { Menu } from 'semantic-ui-react'

class ImageAward extends React.Component {    
    state = {
        imageUrl: ""
    }

    render(){
        return (
            <>
                <Menu.Item>
                    <h4>{(this.props.num + 1) * 100} words:</h4>
                </Menu.Item>
                <Menu.Item>
                    <img src={this.props.img} alt={this.props.num} text='' style={{maxHeight: '30vh'}} />
                </Menu.Item>
            </>
        ) 
    }


}

export default ImageAward
