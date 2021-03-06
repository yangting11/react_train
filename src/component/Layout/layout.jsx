import React from 'react'
import { Layout, Menu, Icon  } from 'antd';
import { Link } from 'react-router-dom'
import './layout.css'
const { Header, Footer, Sider, Content } = Layout;

class LayoutItem extends React.Component{
    state = {
        collapsed: true,
    };

    // toggle = () => {
    //     this.setState({
    //         collapsed: !this.state.collapsed,
    //     });
    // }
    render(){
        return(
            <Layout>
                <Header>
                    <div style={{width:'60px',height:'60px',background:'#001529',position:'absolute',textAlign:'center',lineHeight:'60px',left:'0',top:'0'}}>
                        <img src="/images/use.jpg" style={{width:'36px'}} />
                    </div>
                    Header
                </Header>
                <Layout>
                    <Sider
                        trigger={null}
                        collapsible
                        collapsed={this.state.collapsed}
                    >
                        {/*<div className="icon">*/}
                            {/*<Icon*/}
                                {/*className="trigger"*/}
                                {/*type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}*/}
                                {/*onClick={this.toggle}*/}
                            {/*/>*/}
                        {/*</div>*/}
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <Link to="/home">
                                    <Icon type="user" />
                                    <span>首页</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/home">
                                    <Icon type="video-camera" />
                                    <span>第二个页面</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/home">
                                    <Icon type="upload" />
                                    <span>第三个页面</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Layout>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
                            {this.props.children}
                        </Content>
                    </Layout>
                </Layout>
            </Layout>

        )
    }
}
export default LayoutItem