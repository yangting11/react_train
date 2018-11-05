import React from 'react'
import './Login.css'
import {Button, message} from 'antd'
class Login extends React.Component{
    state={
        username:'',
        password:''
    }
    changeValue(e){
        var name = e.target.name;
        this.setState({
            [name]:e.target.value
        })
    }
    onkeyclick(e){
        if(e.keyCode===13){
            this.loginAction()
        }
    }
    loginAction(){
        if(this.state.username!=="" && this.state.password!==""){
            message.success("登录成功")
            if(this.state.username=="yangting11" && this.state.password=="yytt1227"){
                localStorage.setItem('username','yangting11')
                window.location.href = "/home"
            }
        }else{
            message.success("登录失败")
        }
    }
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
                        <input type="text" name="username" onKeyDown={(e)=>this.onkeyclick(e)} placeholder="用户名" value={this.state.username} onChange={(e)=>this.changeValue(e)}/>
                    </div> 
                    <div className="loginItem">
                        <span>密&nbsp;&nbsp;&nbsp;码</span>
                        <input type="password" name="password" placeholder="密码" value={this.state.password} onChange={(e)=>this.changeValue(e)}/>
                    </div> 
                    <Button type="primary" className="submitBtn" onClick={e=>{this.loginAction(e)}}>登 录</Button>
                </div>
            </div>
        )
    }
}
export default Login