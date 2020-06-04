/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const componentsRouter = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: 'Components',
    icon: 'component'
  },
  children: [
    {
      path: 'kanban',
      component: () => import('@/views/kanban/KanBan'),
      name: 'KanBan',
      meta: { title: '看板', icon: 'link' }
    },
    {
      path: 'gridstack',
      component: () => import('@/views/gridstack/GridStackPage'),
      name: 'GridStackPage',
      meta: { title: '动态布局', icon: 'link' }
    },
    {
      path: 'gantt',
      component: () => import('@/views/gantt/DemoGantt'),
      name: 'DemoGantt',
      meta: { title: '甘特图', icon: 'link' }
    },
    {
      path: 'fullcalendar',
      component: () => import('@/views/fullcalendar/FullCalendar'),
      name: 'FullCalendar',
      meta: { title: '排期', icon: 'link' }
    }
  ]
}

export default componentsRouter
