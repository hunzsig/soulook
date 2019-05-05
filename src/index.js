import ReactDOM from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';
import routerConfig from './routerConfigAsync';

import hRouter from './hRouter';

const CONTAINER = document.getElementById('h-container');

if (!CONTAINER) {
  throw new Error('当前页面不存在(Page has not) <div id="h-container"></div> 节点(Tag).');
}

hRouter.setRouter(Router);
hRouter.setIsAsync(true);
hRouter.setConfig(routerConfig);
ReactDOM.render(hRouter.build(), CONTAINER);
