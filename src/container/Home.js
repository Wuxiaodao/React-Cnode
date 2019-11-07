import React, { Component } from 'react'
import {Link,Route} from 'react-router-dom';
import All from './Post/All';
import Jinghua from './Post/Jinghua';
import Share from './Post/Share';
import Ask from './Post/Ask';
import Recruit from './Post/Recruit';
import Test from './Post/Test';
import './Home.css';
export default class Home extends Component {
    render() {
        let {url} = this.props.match;
        return (
            <div>
                <div className="container">
                    <div className="ziti">
                <Link style={{color:"#80BD01"}} to={`${url}/all/`}>全部</Link>
                <Link style={{marginLeft:"20px",color:"#80BD01",textdecoration:"none"}} to={`${url}/jinghua`}>精华</Link>
                <Link style={{marginLeft:"20px",color:"#80BD01"}} to={`${url}/share`}>分享</Link>
                <Link style={{marginLeft:"20px",color:"#80BD01"}} to={`${url}/ask`}>问答</Link>
                <Link style={{marginLeft:"20px",color:"#80BD01"}} to={`${url}/recruit`}>招聘</Link>
                <Link style={{marginLeft:"20px",color:"#80BD01"}} to={`${url}/test`}>客户端测试</Link>
                </div>
            </div>
            <div>
                <Route path={url+'/all'} component={All}/> 
                <Route path={url+'/jinghua'} component={Jinghua}/>
                <Route path={url+'/share'} component={Share}/> 
                <Route path={url+'/ask'} component={Ask}/>
                <Route path={url+'/recruit'} component={Recruit}/> 
                <Route path={url+'/test'} component={Test}/>
            </div>
            </div>
        )
    }
}
