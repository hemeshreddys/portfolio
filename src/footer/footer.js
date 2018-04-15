import React, { Component } from 'react';

class footer extends Component{
    render(){
        const mainContainer = {
            width: '100%',
            height:'auto',
            backgroundColor:'#960005',
            color:'white',
            
        }
        return(
            <div style={mainContainer}>
            <h1>Front-end Developer </h1>
            </div>
        );
    }
}
export default footer;
