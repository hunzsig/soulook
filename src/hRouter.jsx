/**
 * 定义应用路由
 */
import { Switch, Route } from 'react-router';
import React from 'react';
import Loadable from 'react-loadable';
import HRouterLoading from './hRouterLoading';

const hRouter = {

  router: null,
  isAsync: true,
  config: [],

  setRouter: (router) => {
    hRouter.router = router;
  },
  setIsAsync: (isAsync) => {
    hRouter.isAsync = isAsync;
  },
  setConfig: (config) => {
    hRouter.config = config;
  },

  /**
   * 将路由信息扁平化，继承上一级路由的 path
   * @param {Array} config 路由配置
   */
  recursive: (config = []) => {
    const routeMap = [];
    config.forEach((item) => {
      const route = {
        path: item.path,
        layout: item.layout,
        component: item.component,
        async: typeof item.async === 'boolean' ? item.async : hRouter.isAsync,
        children: item.children || [],
        icon: item.icon || undefined,
        hide: item.hide || false,
        disabled: typeof item.disabled === 'boolean' ? item.disabled : false,
      };
      if (Array.isArray(item.children)) {
        route.childRoutes = hRouter.recursive(item.children);
      }
      routeMap.push(route);
    });
    return routeMap;
  },

  /**
   * 将扁平化后的路由信息生成 Route 节点
   *
   * @param {Element} container 路由容器
   * @param {object} router 路由对象
   * @param {string} contextPath 上层路由地址
   * @return {Route}
   * @example
   * <Switch>
   *   <Route exact path="/" component={Home} />
   *   <Route exact path="/page3" component={Page3} />
   *   <Route exact path="/page4" component={Page4} />
   *   <Route exact path="/page3/:id" component={Page3} />
   *   <Route exact component={NotFound} />
   * </Switch>
   */
  render: (container, router, contextPath) => {
    const routeChildren = [];
    const renderRoute = (routeContainer, routeItem, routeContextPath) => {
      let routePath;
      if (!routeItem.path) {
        // eslint-disable-next-line
        console.error('route must has `path`');
      } else if (routeItem.path === '/' || routeItem.path === '*') {
        routePath = routeItem.path;
      } else {
        routePath = `/${routeContextPath}/${routeItem.path}`.replace(/\/+/g, '/');
      }
      // 优先使用当前定义的 layout
      if (routeItem.layout && routeItem.component) {
        routeChildren.push(
          <Route
            key={routePath}
            exact
            path={routePath}
            render={(props) => {
              // 处理layout配参
              let layout = null;
              if (Array.isArray(routeItem.layout)) {
                layout = routeItem.layout[0];
                props.h = routeItem.layout[1];
              } else {
                layout = routeItem.layout;
                props.h = {};
              }
              return React.createElement(
                layout,
                props,
                React.createElement((routeItem.async === true && routeItem.component !== undefined)
                  ? Loadable({ loader: routeItem.component, loading: HRouterLoading })
                  : routeItem.component, props),
              );
            }}
          />,
        );
      } else if (routeContainer && routeItem.component) {
        // 使用上层节点作为 container
        routeChildren.push(
          <Route
            key={routePath}
            exact
            path={routePath}
            render={(props) => {
              return React.createElement(
                routeContainer,
                props,
                React.createElement((routeItem.async === true && routeItem.component !== undefined)
                  ? Loadable({ loader: routeItem.component, loading: HRouterLoading })
                  : routeItem.component, props),
              );
            }}
          />,
        );
      } else {
        routeChildren.push(
          <Route
            key={routePath}
            exact
            path={routePath}
            component={(routeItem.async === true && routeItem.component !== undefined)
              ? Loadable({ loader: routeItem.component, loading: HRouterLoading })
              : routeItem.component}
          />,
        );
      }
      // 存在子路由，递归当前路径，并添加到路由中
      if (Array.isArray(routeItem.childRoutes)) {
        routeItem.childRoutes.forEach((r) => {
          // 递归传递当前 route.component 作为子节点的 container
          renderRoute((routeItem.async === true && routeItem.component !== undefined)
            ? Loadable({ loader: routeItem.component, loading: HRouterLoading })
            : routeItem.component, r, routePath);
        });
      }
    };
    router.forEach((r) => {
      renderRoute(container, r, contextPath);
    });
    return <Switch>{routeChildren}</Switch>;
  },

  /**
   * 构建Router组件
   * @returns {*}
   */
  build: () => {
    const routerWithReactRouter4 = hRouter.recursive(hRouter.config);
    const routeChildren = hRouter.render(null, routerWithReactRouter4, '/');
    return <hRouter.router>{routeChildren}</hRouter.router>;
  },

};

export default hRouter;
