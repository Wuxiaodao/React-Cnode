import React from 'react'
import {Link} from "react-router-dom";
export default function Header() {
        return (
            <div className='header'>
                <header>
                <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" alt=""/>
                    <div style={{float:'right'}}>
                    <Link to='/Home'>首页</Link>
                    <Link to='/Start'>新手入门</Link>
                    <Link to='/Api'>API</Link>
                    <Link to='/About'>关于</Link>
                    <Link>注册</Link>
                    <Link to='/Signin'>登录</Link>
                    
                    
                    
                    </div>
                </header>
            </div>
        )
}
