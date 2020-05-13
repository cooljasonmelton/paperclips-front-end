import React from 'react'

const Title = () => {
    return (
        <div className="title-container">
            <img className="title-pic" 
                src={process.env.PUBLIC_URL + '/paperclips.jpeg'} 
                alt="paperclips"
                />
            <h1 className="title-text">paperclips</h1>
        </div>
    )
}

export default Title