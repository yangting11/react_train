import React from 'react'
import { Layout } from 'antd';
import './layout.css'
const { Header, Footer, Sider, Content } = Layout;

class LayoutItem extends React.Component{
    render(){
        return(
            <div>
                <Layout>
                    <Header className="header">Header</Header>
                    <Layout>
                        <Sider className="sider">Sider</Sider>
                        <Content className="content">
                            {this.props.children}
                        </Content>
                    </Layout>
                    <Footer className="footer">11111111</Footer>
                </Layout>
            </div>
        )
    }
}
export default LayoutItem