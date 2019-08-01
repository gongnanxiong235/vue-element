import home from './components/home.vue'
import news from './components/news.vue'
import photo from './components/photo'
import BlogList from './components/BlogList'
import BlogAdd from './components/BlogAdd'
import Loading from './components/Loading'

export default {
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: home
        },
        {
            path: '/news',
            component: news
        },
        {
            path: "/",
            component: photo
        },
        {
            path: "/blog",
            component: BlogList
        },
        {
            path: "/addblog",
            component: BlogAdd
        },
        {
            path: "/loading",
            component: Loading
        },

    ]
}