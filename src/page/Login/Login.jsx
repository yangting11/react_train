import React from 'react'
import './Login.scss'
class Login extends React.Component{
    render(){
        return(
            <div className="loginPage">                
                <div className="pagebar"></div>
                <div className="textpart">
                    <h3>婷婷小朋友的珍藏记录</h3>
                    <p>嘘，开发中。暂时不对小伙伴开放访问权限</p>
                </div>
                <div className="loginForm">
                    <div className="title">用户登录</div>
                    <div className="loginItem">
                        <span>用户名</span>
                        <input type="text" placeholder="用户名" />   
                    </div> 
                    <div className="loginItem">
                        <span>密&nbsp;&nbsp;&nbsp;码</span>
                        <input type="password" placeholder="密码" />   
                    </div> 
                    <div className="submitBtn">登&nbsp;录</div>
                </div>
            </div>
        )
    }
}
export default Login