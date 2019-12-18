import React, {Component} from 'react';
import {Layout, Row, Col, Menu, Button, Icon} from 'antd';
import {withRouter} from 'react-router-dom';
import Cookie from '../../Cookie';
import hRouter from '../../hRouter';
import Loadable from 'react-loadable';
import HRouterLoading from './../../hRouterLoading';

import './Layout.scss';
import './Index.scss';

const {Content} = Layout;
const pageCache = {};

class Index extends Component {
  static propTypes = {};
  static defaultProps = {};

  constructor(props) {
    super(props);
    const collapsed = Cookie.get('layout-collapsed');
    this.pathname = props.location.pathname.split('/').pop().replace('|', '/');
    this.routerAll = this.allRouter();
    this.routerFlat = this.flatRouter(this.routerAll);
    this.children = this.routerFlat['/index'].children;
    this.state = {
      theme: Cookie.get('layout-theme') || 'light',
      fontSize: Cookie.get('layout-font-size') || 'small',
      screenWidth: window.innerWidth,
      collapsed: window.innerWidth < 900 || (collapsed === 'true'),
      uri: this.pathname.length > 0 ? this.pathname + '.md' : 'README.md',
    };
    this.state.active = this.getActive();
    this.state.open = this.getOpen();
    const lr = this.getLR();
    this.state.leftPage = lr[0];
    this.state.rightPage = lr[1];
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

  getOpen = () => {
    const paths = decodeURIComponent(location.pathname).split('/');
    let temp = '/';
    const open = [];
    if (this.state.collapsed === false) {
      paths.forEach((val) => {
        temp += (temp === '/') ? val : '/' + val;
        if (this.routerFlat[temp] !== undefined && !open.includes(this.routerFlat[temp].jumpPath)) {
          open.push(this.routerFlat[temp].jumpPath);
        }
      });
      if (paths.length === 2 && paths[1] === '') {
        open.push(this.routerAll[0].jumpPath);
      }
    }
    return open;
  };

  getActive = () => {
    const pathname = decodeURIComponent(location.pathname);
    const active = [];
    active.push(pathname);
    if (pathname === '/') {
      active.push(this.routerAll[0].jumpPath);
    }
    return active;
  };

  getLR = () => {
    const pathname = decodeURIComponent(location.pathname);
    let leftPage = null;
    let rightPage = null;
    let leftCanGet = true;
    let rightCanGet = false;
    this.routerAll.forEach((val) => {
      if (val.children.length === 0) {
        if (val.jumpPath !== pathname) {
          if (leftCanGet) leftPage = val.jumpPath;
          if (rightCanGet && rightPage === null) rightPage = val.jumpPath;
        }
        if (val.jumpPath === pathname) {
          leftCanGet = false;
          rightCanGet = true;
        }
        if (rightPage !== null) {
          rightCanGet = false;
        }
      }
    });
    return [leftPage, rightPage];
  };

  toPage = (path) => {
    const p = path.split('/').pop().replace('|', '/');
    window.history.pushState(null, null, path);
    const lr = this.getLR();
    this.setState({
      uri: p + '.md',
      active: this.getActive(),
      open: this.getOpen(),
      leftPage: lr[0],
      rightPage: lr[1],
    });
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
    let book = pageCache[this.state.uri] || null;
    if (book === null) {
      book = pageCache[this.state.uri] = require("./../../book/" + this.state.uri);
    }
    return (
      <Layout className={`h-layout ${this.state.theme} ${this.state.fontSize}`}>
        <Row className="row" type="flex">
          <Col>
            <Menu
              theme={this.state.theme}
              inlineCollapsed={this.state.collapsed}
              className="menu"
              mode="inline"
              openKeys={this.state.open}
              selectedKeys={this.state.active}
              onClick={(evt) => {
                if (evt.key !== decodeURIComponent(location.pathname)) {
                  this.toPage(evt.key);
                }
              }}
              onOpenChange={(openKeys) => {
                this.setState({
                  open: openKeys,
                });
              }}
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
                    this.state.collapsed = this.state.collapsed !== true;
                    if(this.state.collapsed){
                      this.prevOpen = JSON.parse(JSON.stringify(this.state.open || []));
                    }
                    this.setState({
                      collapsed: this.state.collapsed,
                      open: this.state.collapsed ? [] : this.prevOpen,
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
              </Button.Group>
              <Content className="con" id="layout">
                {
                  this.state.theme === 'light'
                    ? React.createElement(Loadable({
                      loader: () => import('./IndexLight'),
                      loading: HRouterLoading
                    }), {book: book})
                    : React.createElement(Loadable({
                      loader: () => import('./IndexDark'),
                      loading: HRouterLoading
                    }), {book: book})
                }
                <div className="page-trans">
                  <Icon
                    type="left"
                    className={this.state.leftPage === null ? 'disabled' : 'enabled'}
                    onClick={() => {
                      this.toPage(this.state.leftPage);
                    }}
                  />
                  <Icon
                    type="right"
                    className={this.state.rightPage === null ? 'disabled' : 'enabled'}
                    disabled={this.state.rightPage === null}
                    onClick={() => {
                      this.toPage(this.state.rightPage);
                    }}
                  />
                </div>
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
                    <a href="https://github.com/hunzsig/soulook" target="_blank" className={this.state.theme}><Icon
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

export default withRouter(Index);
