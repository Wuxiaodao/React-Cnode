import React, { Component } from 'react'
import {fetch} from 'whatwg-fetch'
import {Link} from "react-router-dom"
import './post.css';

export default class Test extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        fetch('https://cnodejs.org/api/v1/topics?tab=dev&mdrender=true&page=1',{method:'GET'})
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.data
            })
        })
    }

    click=(num)=>{
        fetch('https://cnodejs.org/api/v1/topics?tab=dev&mdrender=true&page='+num,{method:'GET'})
        .then((res)=>res.json())
        .then((res)=>{
            this.setState({
                data:res.data
            })
        })
    }

    render() {
        var number = [1,2,3,4,5,6,7,8,9,10];
        return (
            <div className="no-padding">
                <div>
                <div className="topic_title">
                    <ul>
                        {
                            this.state.data.map((user,idx)=>
                            <div key={idx}>
                                <span><img src={user.author.avatar_url}/></span>
                                {user.reply_count}/<span className="replay">{user.visit_count}</span>
                    
                                <div>
                                <span><Link style={{color:"black"}} to={`/content/${user.id}`}>{user.title}</Link></span>
                                
                                <span style={{float:"right",fontSize:'12px',padding:"10px 20px"}}>8分钟前</span></div>
                            </div>)
                        },
                    
                        {
                            number.map((user)=>
                                <li style={{color:"black",listStyle:"none",float:"left",marginLeft:"10px"}}
                                onClick={()=>{return this.click(user)}}><a href="#">{user}</a>
                                </li>
                            )
                        }
                    </ul>
                </div>
                </div>
            </div>
        )
    }
}