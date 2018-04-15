import React, { Component } from 'react';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';

class main extends Component{
    render(){
        const mainContainer = {
            width: '100%',
            height:'auto',
            boxSizing: 'border-box'
        }
        return(
            <div style={mainContainer}>
                <Page1/>
                <Page2/>
                <Page3/>
                <Page4/>
            </div>
        );
    }
}
export default main;
