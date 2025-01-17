import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

/**
 * 在主框架内显示
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutHeaderAside,
    children: [
      // 首页
      {
        path: 'index',
        name: 'index',
        meta: {
          auth: true
        },
        component: _import('system/index')
      },
      {
        path: 'apiTestCase',
        name: 'apiTestCase',
        meta: {
          title: '接口测试用例管理',
          auth: true
        },
        component: _import('apiTest/apiTestCase')
      },
      {
        path: 'apiTestSuite',
        name: 'apiTestSuite',
        meta: {
          title: '接口测试集管理',
          auth: true
        },
        component: _import('apiTest/apiTestSuite')
      },
      {
        path: 'apiTestTask',
        name: 'apiTestTask',
        meta: {
          title: '接口测试任务管理',
          auth: true
        },
        component: _import('apiTest/apiTestTask')
      },
      {
        path: 'apiParamSetting',
        name: 'apiParamSetting',
        meta: {
          title: '接口测试参数设置',
          auth: true
        },
        component: _import('apiTest/apiParamSetting')
      },
      {
        path: 'uiTestController',
        name: 'uiTestController',
        meta: {
          title: 'UI自动化测试控制器',
          auth: true
        },
        component: _import('uiTest/uiTestController')
      },
      {
        path: 'apiTestReport',
        name: 'apiTestReport',
        meta: {
          title: '接口自动化测试报告',
          auth: true
        },
        component: _import('testReport/apiTestReport')
      },
      {
        path: 'uiTestReport',
        name: 'uiTestReport',
        meta: {
          title: 'UI自动化测试报告',
          auth: true
        },
        component: _import('testReport/uiTestReport')
      },
      {
        path: 'projectManage',
        name: 'projectManage',
        meta: {
          title: '项目管理',
          auth: true
        },
        component: _import('projectManage')
      },
      // 系统 前端日志
      {
        path: 'log',
        name: 'log',
        meta: {
          title: '前端日志',
          auth: true
        },
        component: _import('system/log')
      },
      // 刷新页面 必须保留
      {
        path: 'refresh',
        name: 'refresh',
        hidden: true,
        component: _import('system/function/refresh')
      },
      // 页面重定向 必须保留
      {
        path: 'redirect/:route*',
        name: 'redirect',
        hidden: true,
        component: _import('system/function/redirect')
      }
    ]
  }
]

/**
 * 在主框架之外显示
 */
const frameOut = [
  // 登录
  {
    path: '/login',
    name: 'login',
    component: _import('system/login')
  }
]

/**
 * 错误页面
 */
const errorPage = [
  {
    path: '*',
    name: '404',
    component: _import('system/error/404')
  }
]

// 导出需要显示菜单的
export const frameInRoutes = frameIn

// 重新组织后导出
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
