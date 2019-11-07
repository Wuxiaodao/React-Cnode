import React, { Component } from 'react'
import Header from './components/Header'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Home from './container/Home';
import Api from './container/Api';
import About from './container/About';
import Start from './container/Start';
import Signin from './container/Signin';
import Right from './right';
import Content from './container/content';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header/>
                </div>
                <div className='content'>
                    <div className="left">
                        <Route path='/home' component={Home}/>
                        <Route path='/start' component={Start}/>
                        <Route path='/api' component={Api}/>
                        <Route path='/about' component={About}/>
                        <Route path='/signin' component={Signin}/>
                        <Route path='/content' component={Content}/>

                    </div>
                    <div className="right">
                        <Right/>
                    </div>
                    
                </div>
            </Router>
        )
    }
}