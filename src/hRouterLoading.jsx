import React, { Component } from 'react';
import { Spin } from 'antd';

export default class HRouterLoading extends Component {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    if (this.props.error) {
      return (
        <div style={{ textAlign: 'center', width: '100%', height: '300px', lineHeight: '300px' }}>
          <p>Page Error</p>
          <p>{this.props.error}</p>
        </div>
      );
    } else if (this.props.pastDelay) {
      return (
        <div style={{ textAlign: 'center', width: '100%', height: '300px', lineHeight: '300px' }}>
          <Spin tip="loading" size="large" />
        </div>
      );
    }
    return null;
  }
}
