import ReactDOM from 'react-dom';

import { HashRouter as Router } from 'react-router-dom';
import routerConfig from './routerConfigSync';

import hRouter from './hRouter';

const CONTAINER = document.getElementById('h-container');

if (!CONTAINER) {
  throw new Error('当前页面不存在 <div id="h-container"></div> 节点.');
}

hRouter.setRouter(Router);
hRouter.setIsAsync(true);
hRouter.setConfig(routerConfig);
ReactDOM.render(hRouter.build(), CONTAINER);
