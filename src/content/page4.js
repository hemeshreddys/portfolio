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
            
                <ul style={flexBox}>
                    <li style={liStyle}>Contentful   </li>
                    <li style={liStyle}>ES6  </li>
                    <li style={liStyle}>Wordpress / Drupal / Umbraco  </li>
                    <li style={liStyle}>Reactjs / Angularjs / Vue  </li>
                    <li style={liStyle}>SASS / LESS  </li>
                    <li style={liStyle}>Javascript  </li>
                    <li style={liStyle}>Jquery  </li>
                    <li style={liStyle}>Frontend / Backend / Fullstack  </li>
                    <li style={liStyle}>Taskrunners – Webpack / Gulp / Grunt / Yarn / Npn  </li>
                    <li style={liStyle}>Npm  </li>
                    <li style={liStyle}>Browsers – Chrome / Firefox / IE / Mozilla  </li>
                    <li style={liStyle}>HTML  </li>
                    <li style={liStyle}>CSS  </li>
                    <li style={liStyle}>Bootstrap / Foundation / Skeleton  </li>
                    <li style={liStyle}>Tools – Visual studio code / Brackets /  Sublime text  </li>
                    <li style={liStyle}>PHP / ASP  </li>
                    <li style={liStyle}>Ecommerce Shopfiy / Magento / Yo Kart / BigCommerce / WooCommerce / Neto  </li>
                    <li style={liStyle}>Sketch / photoshop  </li>
                    <li style={liStyle}>Source tree  </li>
                    <li style={liStyle}>Jira / trello  </li>
                    <li style={liStyle}>Mailchimp / taguchi  </li>
                    <li style={liStyle}>Browser stack  </li>
                    <li style={liStyle}>Chrome developer tools  </li>
                    <li style={liStyle}>CSS Flexbox / CSS Grid  </li>
                    <li style={liStyle}>Code playground - Codepen / JSFiddle / JS Bin / Plunker / Dabblet / CSS Deck / Liveweave  </li>
                    <li style={liStyle}>Php frameworks - Symfony, Laravel, and Yii  </li>
                    <li style={liStyle}>Source tree / svn / git / Mercurial  </li>
                    <li style={liStyle}>Resource guru / Jira / trello  </li>
                    <li style={liStyle}>Crossbrowser Testing / Sauce Labs / Ghostlab / Testingbot / EndTest / Browserstack  </li>
                    <li style={liStyle}>Chrome developer extensions - Web Developer / Canvasflip visual inspector . - https://alternativeto.net/software/google-chrome-developer-tools/  </li>
                    <li style={liStyle}>Contentful / Netlify / Prismic / Bandzoogle  </li>
                </ul>
       
                
            </div>
        );
    }
}
export default page4;
