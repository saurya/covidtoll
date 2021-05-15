import { createRouter, createWebHashHistory } from 'vue-router'
import AddMemorialModal from '../views/AddMemorialModal.vue'
import ViewMemorialModal from '../views/ViewMemorialModal.vue'
import Explanation from '../views/Explanation.vue'
import Feed from '../views/Feed.vue'
import AddMemorialForm from '../views/AddMemorialForm.vue'

const routes = [
  {
    path: '/',
    components:
        {
          default: Explanation,
          feed: Feed,
          addmemorialform: AddMemorialForm,
        }
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
