import React, { Component } from 'react';

class page2 extends Component{
    render(){
        const mainContainer = {
            width: '100%',
            height:'auto',
            borderBottom:'5px solid black' ,
            padding:'30px',
            backgroundColor:'#CC040A',
            color:'white',
            boxSizing: 'border-box'
        }
        return(
            <div style={mainContainer}>
                <h1>Sass Vs LESS</h1>                
                <p>
                    Sass and LESS are both very powerful CSS extensions. 
                    You can think of them as more of a programming language designed to make CSS more maintainable, 
                    themeable, and extendable. Both Sass and LESS are backward compatible so you can easily convert your 
                    existing CSS files just by renaming the .css file extension to .less or .scss, respectively. 
                    LESS is JavaScript based and Sass is Ruby based.
                </p>
            </div>
        );
    }
}
export default page2;
