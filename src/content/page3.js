import React, { Component } from 'react';

class page3 extends Component{
    render(){
        const mainContainer = {
            width: '100%',
            height:'auto',
            borderBottom:'5px solid black' ,
            padding:'30px',
            backgroundColor:'#960005',
            color:'white',
            boxSizing: 'border-box'
        }
        return(
            <div style={mainContainer}>
                <h1>To deploy the site </h1>                
                <ol>
                <li>
                    npm run build
                    git init
                </li>
                <li>
                    Add below code to “package.json”
                    "homepage" : "http://hemeshreddys.github.io/wikiapp",
                </li>
                <li>
                    Add these below code -> "scripts":      
                    in “package.json”
                    
                    "predeploy": "npm run build",
                    "deploy": "gh-pages -d build",
                </li>
                <li>
                    git add .
                </li>
                <li>
                  git commit -m "second commit"
                </li>
                <li>
                    git status
                    git remote add origin https://github.com/hemeshreddys/name.git
                </li>
                <li>
                    git push -u origin master
                </li>
                <li>
                    npm run build
                </li>
                <li>
                    yarn run deploy
                </li>
                    in case if is not running  throwing error Command failed with exit code 127.
                    npm install --save gh-pages
                    yarn add gh-pages
                    reference site : https://www.youtube.com/watch?v=nyjarJhVQMM
                    To remove a remote repository you enter:
                    git remote rm origin
                </ol>
            </div>
        );
    }
}
export default page3;
