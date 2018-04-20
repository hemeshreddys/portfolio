import React, { Component } from 'react';
import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class main extends Component{
    render(){
        const mainContainer = {
            width: '100%',
            height:'auto',
            boxSizing: 'border-box'
        }
        const menu = {
            display:'flex',
            width:'50%',
            justifyContent: 'space-evenly'
        }
        const submenu = {

        }
        return(
            <Router>
                <div>
                    <div style={menu}>
                        <div><Link to="/">Home</Link></div>
                        <div><Link to="/page2">Sass Vs LESS</Link></div>
                        <div><Link to="/page3">page3</Link></div>
                        <div><Link to="/page4">page4</Link></div>
                    </div>
                <Route exact path="/" component={Page1} />
                <Route path="/page2" component={Page2} />
                <Route path="/page3" component={Page3} />
                <Route path="/page4" component={Page4} />
                </div>
            </Router>
        );
    }
}
export default main;
