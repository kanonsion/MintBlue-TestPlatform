import { uniqueId } from 'lodash'

/**
 * @description 给菜单数据补充上 path 字段
 * @description https://github.com/d2-projects/d2-admin/issues/209
 * @param {Array} menu 原始的菜单数据
 */

function supplementPath(menu) {
  return menu.map(e => ({
    ...e,
    path: e.path || uniqueId('d2-menu-empty-'),
    ...e.children ? {
      children: supplementPath(e.children)
    } : {}
  }))
}

export const menuHeader = supplementPath([
  { path: '/index', title: '首页', icon: 'home' },
  { path: '/projectManage', title: '项目管理', icon: 'flask' }
])

export const menuAside = supplementPath([
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '接口自动化测试',
    icon: 'plug',
    children: [
      { path: '/apiTestCase', title: '测试用例管理', icon: 'bug' },
      { path: '/apiTestSuite', title: '测试集管理', icon: 'sitemap' },
      { path: '/apiTestTask', title: '测试任务管理', icon: 'tasks' },
      { path: '/apiParamSetting', title: '测试参数设置', icon: 'cog' }
    ]
  },
  {
    title: 'UI自动化测试',
    icon: 'object-group',
    children: [
      { path: '/uiTestController', title: 'UI自动化测试控制器', icon: 'hand-peace-o' }
    ]
  },
  {
    title: '测试报告',
    icon: 'area-chart',
    children: [
      { path: '/apiTestReport', title: '接口自动化测试报告', icon: 'bar-chart' },
      { path: '/uiTestReport', title: 'UI自动化测试报告', icon: 'pie-chart' }
    ]
  }
])
