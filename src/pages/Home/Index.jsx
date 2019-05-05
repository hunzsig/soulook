import React, {Component} from 'react';
import Loadable from 'react-loadable';
import HRouterLoading from './../../hRouterLoading';

import './Index.scss';
import Cookie from "../../Cookie";

class Index extends Component {
  constructor(props) {
    super(props);
    this.pathname = props.location.pathname.split('/').pop().replace('|', '/');
    this.uri = this.pathname.length > 0 ? this.pathname + '.md' : 'README.md';
    this.state = {
      theme: Cookie.get('layout-theme'),
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        theme: Cookie.get('layout-theme'),
      });
    }, 1000);
  }


  render() {
    let book = require("./../../book/" + this.uri);
    return this.state.theme === 'light'
      ? React.createElement(Loadable({loader: () => import('./IndexLight'), loading: HRouterLoading}), {book: book})
      : React.createElement(Loadable({loader: () => import('./IndexDark'), loading: HRouterLoading}), {book: book});
  }
}

export default Index;
