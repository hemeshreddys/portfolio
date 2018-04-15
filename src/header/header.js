import React, { Component } from 'react';

class header extends Component{
    render(){
        const mainContainer = {
            width: '100%',
            height:'70px',
            backgroundColor:'#960005',
            color:'white',
            margin:'0px',
            padding:'10px'
        }
        return(
            <div style={mainContainer}>
                <h1>Web Technologies</h1>
            </div>
        );
    }
}

export default header;