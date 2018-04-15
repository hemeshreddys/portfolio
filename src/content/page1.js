import React, { Component } from 'react';

class page1 extends Component{
    render(){
        const mainContainer = {
            width: '100%',
            height:'auto',
            borderBottom:'5px solid #3C0059' ,
            padding:'30px',
            backgroundColor:'#590282',
            color:'white',
            boxSizing: 'border-box'
        }
        return(
            <div style={mainContainer}>
                <h1>Top 10 ES6 Features Every Busy JavaScript Developer Must Know</h1>
                <p>Here’s the list of the top 10 best ES6 features for a busy software engineer (in no particular order):</p>
                <ul>
                    <li>Default Parameters in ES6</li>
                    <li>Template Literals in ES6</li>
                    <li>Multi-line Strings in ES6</li>
                    <li>Destructuring Assignment in ES6</li>
                    <li>Enhanced Object Literals in ES6</li>
                    <li>Arrow Functions in ES6</li>
                    <li>Promises in ES6</li>
                    <li>Block-Scoped Constructs Let and Const</li>
                    <li>Classes in ES6</li>
                    <li>Modules in ES6</li>
                </ul>
            </div>
        );
    }
}
export default page1;
