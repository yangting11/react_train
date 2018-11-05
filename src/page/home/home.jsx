import React from 'react'
class Home extends React.Component{
    componentWillMount(){
        if(localStorage.getItem('username')!="yangting11"){
            window.location.href="/"
        }
    }
    render(){
        return(
            <div>11111</div>
        )
    }
}
export default Home