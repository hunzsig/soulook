import React, {Component} from 'react';
import {Layout, Row, Col, Menu, Button, Icon} from 'antd';
import {withRouter} from 'react-router-dom';
import Cookie from './../Cookie';
import hRouter from './../hRouter';

import './Layout.scss';

const {Content} = Layout;

class hLayout extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    const collapsed = Cookie.get('layout-collapsed');
    this.state = {
      theme: Cookie.get('layout-theme') || 'light',
      fontSize: Cookie.get('layout-font-size') || 'small',
      screenWidth: window.innerWidth,
      collapsed: window.innerWidth < 900 || (collapsed === 'true' ? true : false),
      leftPage: null,
      rightPage: null,
    };
    this.routerAll = this.allRouter();
    this.routerFlat = this.flatRouter(this.routerAll);
    this.children = this.routerFlat['/index'].children;
    this.active = this.getActive();
    this.open = this.getOpen();
  }

  componentDidMount() {
    // 窗口改变触发
    window.onresize = () => {
      this.setState({
        screenWidth: window.innerWidth,
      });
    }
  }

  getJumpPath = (router, path) => {
    path = path || router.path;
    if (router.children === undefined || router.children.length <= 0) {
      return path;
    }
    for (const child of router.children) {
      if (child.hide !== true && child.disabled !== true) {
        path += child.path;
        path = this.getJumpPath(child, path);
        break;
      }
    }
    return path;
  };

  flatRouter = (routers, flat) => {
    flat = flat || {};
    routers.forEach((val) => {
      flat[val.fullPath] = val;
      if (val.children !== undefined && val.children.length <= 0) {
        flat = this.flatRouter(val.children, flat);
      }
    });
    return flat;
  };

  // 同时重置 routerConfig 的 fullPath
  allRouter = (routers, all, prev) => {
    routers = routers || hRouter.config;
    all = all || [];
    prev = prev || '';
    routers.forEach((val, idx) => {
      if (['/', '*'].includes(val.path) === false) {
        val.idx = idx;
        val.fullPath = prev + val.path;
        val.jumpPath = prev + this.getJumpPath(val);
        all.push(val);
        if (val.children !== undefined && Array.isArray(val.children) && val.children.length > 0) {
          all = this.allRouter(val.children, all, prev + val.path);
        }
      }
    });
    return all;
  };

  getActive = () => {
    const active = [];
    let leftPage = null;
    let rightPage = null;
    let leftCanGet = true;
    let rightCanGet = false;
    this.routerAll.forEach((val) => {
      if(this.state.collapsed === false) active.push(val.jumpPath);
      if(val.children.length === 0){
        if(val.jumpPath !== this.props.location.pathname){
          if(leftCanGet) leftPage = val.jumpPath;
          if(rightCanGet && rightPage === null) rightPage = val.jumpPath;
        }
        if(val.jumpPath === this.props.location.pathname){
          leftCanGet = false;
          rightCanGet = true;
        }
        if(rightPage !== null){
          rightCanGet = false;
        }
      }
    });
    this.state.leftPage = leftPage;
    this.state.rightPage = rightPage;
    return active;
  };

  getOpen = () => {
    const open = [];
    open.push(this.props.location.pathname);
    if (this.props.location.pathname === '/') {
      open.push(this.routerAll[0].jumpPath);
    }
    return open;
  };

  onMenuClick = (evt) => {
    if (evt.key !== this.props.location.pathname) {
      this.props.history.push(evt.key);
    }
  };

  renderSub = (router) => {
    router = router || this.children;
    return (
      router.map((val) => {
        if (val.hide === true) {
          return null;
        } else if (val.children !== undefined && val.children.length > 0) {
          return (
            <Menu.SubMenu
              key={val.jumpPath}
              disabled={val.disabled}
              title={
                <span>{val.icon !== undefined ? val.icon : ''}<span>{val.name}</span></span>
              }>
              {this.renderSub(val.children)}
            </Menu.SubMenu>
          );
        }
        return (
          <Menu.Item
            key={val.jumpPath}
            disabled={val.disabled}>{val.icon !== undefined ? val.icon : ''}<span>{val.name}</span>
          </Menu.Item>
        );
      })
    );
  };

  render() {
    return (
      <Layout className={`h-layout ${this.state.theme} ${this.state.fontSize}`}>
        <Row className="row" type="flex">
          <Col>
            <Menu
              theme={this.state.theme}
              inlineCollapsed={this.state.collapsed}
              className="menu"
              mode="inline"
              defaultOpenKeys={this.active}
              selectedKeys={this.open}
              onClick={this.onMenuClick}
            >
              {this.renderSub(this.children)}
            </Menu>
          </Col>
          <Col style={{flex: 1}}>
            <div className="conContainer">
              <Button.Group className="menu-btns">
                <Button
                  block={this.state.screen <= 900}
                  type={this.state.collapsed === false ? "primary" : 'default'}
                  icon={this.state.collapsed === false ? "menu-fold" : 'menu-unfold'}
                  onClick={() => {
                    Cookie.set('layout-collapsed', this.state.collapsed !== true);
                    this.setState({
                      collapsed: this.state.collapsed !== true,
                    })
                  }}
                />
                <Button
                  type={this.state.theme === 'light' ? "primary" : 'default'}
                  icon="bulb"
                  onClick={() => {
                    Cookie.set('layout-theme', this.state.theme === 'light' ? 'dark' : 'light');
                    location = location;
                  }}
                />
                <Button
                  type={this.state.fontSize === 'big' ? "primary" : 'default'}
                  icon="font-size"
                  onClick={() => {
                    Cookie.set('layout-font-size', this.state.fontSize === 'small' ? 'big' : 'small');
                    this.setState({
                      fontSize: this.state.fontSize === 'small' ? 'big' : 'small',
                    })
                  }}
                />
                <Button
                  type="dashed"
                  icon="left"
                  disabled={this.state.leftPage === null}
                  onClick={() => {this.props.history.push(this.state.leftPage);}}
                />
                <Button
                  type="dashed"
                  icon="right"
                  disabled={this.state.rightPage === null}
                  onClick={() => {this.props.history.push(this.state.rightPage);}}
                />
              </Button.Group>
              <Content className="con" id="layout">
                {this.props.children}
              </Content>
              <div className="footer">
                <div className="line"/>
                <Row className="copyright">
                  <Col xxs={24} xs={24} s={8} m={8} l={8} xl={8}>
                    <span>魂之似光技术联系QQ：854588403</span>
                  </Col>
                  <Col xxs={24} xs={24} s={8} m={8} l={8} xl={8}>
                    <span>© Copyright 2015-{(new Date().getFullYear())} All rights reserved.</span>
                  </Col>
                  <Col xxs={24} xs={24} s={8} m={8} l={8} xl={8}>
                    <a href="https://gitlab.com/h-web/soulook" target="_blank" className={this.state.theme}><Icon
                      type="gitlab"/>&emsp;魂 书 制 作</a>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Layout>
    );
  }
}

export default withRouter(hLayout);
