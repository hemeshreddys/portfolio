import React, { Component } from 'react';

class page4 extends Component{
    render(){
        const mainContainer = {
            width: '100%',
            height:'auto',
            borderBottom:'5px solid black' ,
            padding:'30px',
            backgroundColor:'#1F012D',
            color:'white',
            boxSizing: 'border-box'
        }
        return(
            <div style={mainContainer}>
                <h1>Front End, Back End, Full Stack—What Does it All Mean?</h1>                
                <strong>Front End</strong>
                <p>
                    The front end of a website is the part a user sees and directly interacts with. It’s built with HTML, CSS, and JavaScript.
                </p>
                <strong>Back End</strong>
                <p>
                    While the front end is everything the user interacts with directly, the back end is much more behind-the-scenes and can have some advantages over front end technologies for specific projects. Back end programming languages include PHP, Ruby, Python, and more.
                </p>
                <strong>Full Stack</strong>
                <p>
                    Full stack developers work with both the front and back end of a website. They’re familiar with HTML, CSS, JavaScript, and one or more back end languages.
                </p>
                
            </div>
        );
    }
}
export default page4;
