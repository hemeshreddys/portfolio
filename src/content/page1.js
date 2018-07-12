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
        const flexBox = {
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
        }
        const liStyle = {
            width: '200px',
            height: '200px',
            float:'left',
            padding: '20px',
            listStyle:'none',
            margin:'5px',
            backgroundColor:'white',
            color:'purple'
            
        }
        return(
            <div style={mainContainer}>
                <h1>Top 10 ES6 Features Every Busy JavaScript Developer Must Know</h1>
                <p>Here’s the list of the top 10 best ES6 features for a busy software engineer (in no particular order):</p>
                <ul style={flexBox}>
                    <li style={liStyle}>Default Parameters in ES6</li>
                    <li style={liStyle}>Template Literals in ES6</li>
                    <li style={liStyle}>Multi-line Strings in ES6</li>
                    <li style={liStyle}>Destructuring Assignment in ES6</li>
                    <li style={liStyle}>Enhanced Object Literals in ES6</li>
                    <li style={liStyle}>Arrow Functions in ES6</li>
                    <li style={liStyle}>Promises in ES6</li>
                    <li style={liStyle}>Block-Scoped Constructs Let and Const</li>
                    <li style={liStyle}>Classes in ES6</li>
                    <li style={liStyle}>Modules in ES6</li>
                </ul>
            </div>
        );
    }
}
export default page1;
