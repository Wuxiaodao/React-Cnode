import React, { Component } from 'react'

export default class Signin extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }

    check=()=>{
        fetch('https://cnodejs.org/api/v1/topics?tab=Home&mdrender=true&page=1',{method:'GET'})
        .then((res)=>res.json())
        .then((res)=>{
            console.log(res);
            this.props.history.push('/Home/all')
        })
    }
    render() {
        return (
            <div className="container">
                <div>
                 <ul>
                        <a href="/">主页</a>
                        <span>/</span>
                        <a>登陆</a>
                </ul>
                </div>
            
            <div className="inner">
            <div>
                <label>用户名</label>
                <div>
                <input type="text"/></div>
                <label>密码</label>
                <br/>
                <input type="text"/>
            </div>
            <button onClick={(this.check)}>登录</button>
            </div>

            </div>
        )
    }
}
