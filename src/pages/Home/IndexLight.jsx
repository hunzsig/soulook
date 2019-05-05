import React, {Component} from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/idea.css';

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
      <div>
        <div dangerouslySetInnerHTML={{__html: this.book}} />
      </div>
    );
  }
}

export default IndexLight;
