import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'

// how to "use" a plug-in
Vue.use(Router)

export default new Router({
  // to remove the hash sign from the URL
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome
    },
    {
      path: '/chat',
      name: 'Chat',
      component: Chat,
      props: true,
      // 'to' is the route parameter that is being passed (name)
      // checking for an actual params name (author)
      beforeEnter: (to, from, next) => {
        if(to.params.name){
          next()
        } else {
          next({ name: 'Welcome' })
        }
      }
    }
  ]
})
