// 以下文件格式为描述路由的协议格式
// 你可以调整 routerConfig 里的内容
// 变量名 routeAsync routerConfig 为检测关键字，请不要修改名称

import SUMMARY from './book/SUMMARY.md';
import Layout from './layout/Layout';
import React from "react";

const dom = document.createElement('div');
dom.innerHTML = SUMMARY;

const getDom = (d, result = [], inc = 1) => {
  const childNodes = d.childNodes;
  for (let i = 0; i < childNodes.length; i++) {
    const id = parseInt(i) + 1;
    const nodeName = childNodes[i].nodeName;
    inc = parseInt(inc);
    switch (nodeName) {
      case 'UL':
        getDom(childNodes[i], result[result.length - 1].children, inc * 36);
        break;
      case 'LI':
        getDom(childNodes[i], result, inc * 36);
        break;
      case 'A':
        let href = childNodes[i].getAttribute('href')
        href = href.replace('.md', '');
        href = href.replace('/', '|');
        result.push({
          path: `/${href}`,
          name: childNodes[i].innerText,
          layout: Layout,
          component: () => import('./pages/Home/Index'),
          children: [],
        });
        break;
      case 'H1':
      case 'H2':
      case 'H3':
      case 'H4':
      case 'H5':
      case 'H6':
        result.push({
          path: `/${id * inc}`,
          name: childNodes[i].innerHTML,
          children: [],
        });
        break;
      default:
        break;
    }
  }
  return result;
};


export default getDom(dom);
