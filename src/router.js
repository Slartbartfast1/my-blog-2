import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import ArticlePage from './views/ArticlePage'

Vue.use(Router)

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        // savedPosition is only available for popstate navigations.
        return savedPosition
    } else {
        const position = {}
        // new navigation.
        // scroll to anchor by returning the selector
        if (to.hash) {
            position.selector = to.hash
        }
        // check if any matched route config has meta that requires scrolling to top
        if (to.matched.some(m => m.meta.scrollToTop)) {
            // cords will be used if no selector is provided,
            // or if the selector didn't match any element.
            position.x = 0
            position.y = 0
        }
        // if the returned position is falsy or an empty object,
        // will retain current scroll position.
        return position
    }
}


export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,scrollBehavior,

    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            children: [{
                path: 'tag',
                component: () => import('./views/Tag.vue')
            },
                 {
                    path: '',
                    component: () => import('./components/FeaturedAndLatest.vue'),
                },
            ]
        },
        // {
        //   path: '/tag',
        //   name: 'Tag',
        //   // route level code-splitting
        //   // this generates a separate chunk (about.[hash].js) for this route
        //   // which is lazy-loaded when the route is visited.
        //   component: () => import(/* webpackChunkName: "about" */ './views/Tag.vue')
        // },
        {
            path: '/article',
            name: 'article',
            component: ArticlePage,
            meta: {scrollToTop: true},
        }
    ]
})
