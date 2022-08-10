import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import NewSection from '@/components/NewSection'
import ViewSections from '@/components/ViewSections'
import EditSections from '@/components/EditSections'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/new',
      name: 'new-section',
      component: NewSection
    },
    {
      path: '/:section_id',
      name: 'view-sections',
      component: ViewSections
    },
    {
      path: '/edit/:section_id',
      name: 'edit-sections',
      component: EditSections
    }
    

  ]
})
