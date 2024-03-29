import React, {Component} from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/vs.css';
import './StyleLight.less';

class IndexLight extends Component {
  constructor(props) {
    super(props);
    this.book = props.book;
    this.state = {};
  }

  componentDidMount() {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  }


  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.book}}/>
    );
  }
}

export default IndexLight;
