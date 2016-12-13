import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';

// 引入导航组件
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

// 引入Antd子组件
import myIntroduce from './introduce.js';
import myApproach from './approach';
import myDetailSwitch from './detailSwitch.js';
import myTableEnterLeave from './tableAddAndDelete.js';
import myCurvePath from './curvePath.js';
import myBanner from './banner.js';
import myPicDetails from './PicDetails';
// 引入原生组件
import myClock from './pureComp/Clock';
import myLoginControl from './pureComp/LoginControl';
import myDropDown from './pureComp/DropDown';
import myTodoApp from './pureComp/TodoApp';
import myRealTimeSearch from './pureComp/RealTimeSearch';

// 配置导航
class Sider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            current: ''
        };
    }

    handleClick(e) {
        this.setState({
            current: e.key
        });
    }

    render() {
        return (
            <div>
                <div className="asider">
                    <img src='src/images/logo.png' width="50" className="logo"/>
                    <Menu theme="dark"
                        onClick={this.handleClick.bind(this)}
                        style={{ width: 200 }}
                        defaultOpenKeys={['sub1', 'sub2']}
                        defaultSelectedKeys={[this.state.current]}
                        mode="inline"
                    >
                        <Menu.Item key="0"><Link to="/myIntroduce"><Icon type="github" />介绍</Link></Menu.Item>
                        <SubMenu key="sub1" title={<span><Icon type="bars" /><span>原生组件</span></span>}>
                            <Menu.Item key="1"><Link to="/pureComp/Clock">时钟</Link></Menu.Item>
                            <Menu.Item key="2"><Link to="/pureComp/LoginControl">登录</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/pureComp/DropDown">下拉菜单</Link></Menu.Item>
                            <Menu.Item key="4"><Link to="/pureComp/TodoApp">备忘录</Link></Menu.Item>
                            <Menu.Item key="5"><Link to="/pureComp/RealTimeSearch">即时搜索</Link></Menu.Item>
                        </SubMenu>
                            <SubMenu key="sub2" title={<span><Icon type="bars" /><span>Ant组件</span></span>}>
                            <Menu.Item key="6"><Link to="/myApproach">依次进场</Link></Menu.Item>
                            <Menu.Item key="7"><Link to="/myDetailSwitch">详细说明切换</Link></Menu.Item>
                            <Menu.Item key="8"><Link to="/myTableEnterLeave">表格信息增删</Link></Menu.Item>
                            <Menu.Item key="9"><Link to="/myCurvePath">曲线路径动画</Link></Menu.Item>
                            <Menu.Item key="10"><Link to="/myBanner">轮播</Link></Menu.Item>
                            <Menu.Item key="11"><Link to="/myPicDetails">图片详情页</Link></Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div className="header">
                    <Menu onClick={this.handleClick}
                          selectedKeys={[this.state.current]}
                          mode="horizontal"
                    >
                        <Menu.Item key="mail">
                            <Icon type="mail" />Navigation One
                        </Menu.Item>
                        <Menu.Item key="app" disabled>
                            <Icon type="appstore" />Navigation Two
                        </Menu.Item>
                        <Menu.Item key="alipay">
                            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a>
                        </Menu.Item>
                        <SubMenu title={<span><Icon type="setting" />Navigation Three - Submenu</span>}>
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
                <div className="content">
                    { this.props.children }
                </div>
            </div>
        )
    }
}

// 配置路由
ReactDom.render((
    <Router history={hashHistory} >
        <Route path="/" component={Sider}>
            <IndexRoute component={myIntroduce} />
            <Route path="pureComp/Clock" component={myClock} />
            <Route path="pureComp/LoginControl" component={myLoginControl} />
            <Route path="pureComp/DropDown" component={myDropDown} />
            <Route path="pureComp/TodoApp" component={myTodoApp} />
            <Route path="pureComp/RealTimeSearch" component={myRealTimeSearch} />
            <Route path="myIntroduce" component={myIntroduce} />
            <Route path="myApproach" component={myApproach} />
            <Route path="myDetailSwitch" component={myDetailSwitch} />
            <Route path="myTableEnterLeave" component={myTableEnterLeave} />
            <Route path="myCurvePath" component={myCurvePath} />
            <Route path="myBanner" component={myBanner} />
            <Route path="myPicDetails" component={myPicDetails} />
        </Route>
    </Router>
), document.getElementById('app'));
