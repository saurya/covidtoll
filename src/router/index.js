import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddMemorialModal from '../views/AddMemorialModal.vue'
import ViewMemorialModal from '../views/ViewMemorialModal.vue'
import Explanation from '../views/Explanation.vue'
import Feed from '../views/Feed.vue'
import AddMemorialForm from '../views/AddMemorialForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,

    children: [
        {
          path: '/expl',
          component: Explanation 
        },
        {
          path: '/feed',
          component: Feed
        },
        {
          path: '/add',
          component: AddMemorialForm
        }
      ]
  },
  {
    path: '/add',
    name: 'Add',
    component: AddMemorialModal
  },
  {
    path: '/view',
    name: 'View',
    component: ViewMemorialModal
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
