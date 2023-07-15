import {
    createRouter,
    createWebHashHistory,
} from 'vue-router';
import layOut from "../layout/index.vue";
import store from "../store/index.js";

const routes = [{
    path: '/',
    redirect: '/main',
    name: 'index',
    component: layOut,
    children: [
        {
            path: 'main',
            name: 'main',
            component: () => import( /* webpackChunkName: "quotation" */ "../views/main.vue"),
            meta: {
                title: '时空坐标 Shandobako'
            }
        },
        {
            path: 'register',
            name: 'register',
            component: () => import( /* webpackChunkName: "quotation" */ "../views/register.vue"),
            meta: {
                title: '时空坐标 Shandobako'
            }
        },
        {
            path: 'restpwd',
            name: 'restpwd',
            component: () => import( /* webpackChunkName: "quotation" */ "../views/restpwd.vue"),
            meta: {
                title: '重置密码'
            }
        },
        {
            path: 'restphone',
            name: 'restphone',
            component: () => import( /* webpackChunkName: "quotation" */ "../views/restphone.vue"),
            meta: {
                title: '重置手机号'
            }
        },
        {
            path: 'login',
            name: 'login',
            component: () => import( /* webpackChunkName: "quotation" */ "../views/login.vue"),
            meta: {
                title: '登录 Login'
            }
        },
        {
            path: 'main',
            name: 'main',
            component: () => import( /* webpackChunkName: "quotation" */ "../views/main.vue"),
            meta: {
                title: '主页 Shandobako '
            }
        },
        {
            path: 'origin',
            name: 'origin',
            component: () => import( /* webpackChunkName: "quotation" */ "../views/origin.vue"),
            beforeEnter: (to, from, next) => {
                if (store.state.token) {
                    next()
                } else {
                    alert("您还未登录，请先登录！")
                    next("/login")
                }
            }

        },
        {
            path: 'dayun',
            name: 'dayun',
            component: () => import( /* webpackChunkName: "quotation" */ "../views/dayun.vue"),
            beforeEnter: (to, from, next) => {
                if (store.state.token) {
                    next()
                } else {
                    alert("您还未登录，请先登录！")
                    next("/login")
                }
            }
        },
        {
            path: 'liunian',
            name: 'liunian',
            component: () => import( /* webpackChunkName: "quotation" */ "../views/liunian.vue"),
            beforeEnter: (to, from, next) => {
                if (store.state.token) {
                    next()
                } else {
                    alert("您还未登录，请先登录！")
                    next("/login")
                }
            }
        },
        {
            path: 'result',
            name: 'result',
            component: () => import( /* webpackChunkName: "quotation" */ "../views/originResult.vue"),
            beforeEnter: (to, from, next) => {
                if (store.state.token) {
                    window.scrollTo(0, 0);
                    next()
                } else {
                    alert("您还未登录，请先登录！")
                    next("/login")
                }
            }
        },
        {
            path: 'dayunResult',
            name: 'dayunResult',
            component: () => import("../views/dayunResult.vue"),
            beforeEnter: (to, from, next) => {
                window.scrollTo(0, 0);
                next();
            }
        },
        {
            path: 'juecheye',
            name: 'juecheye',
            component: () => import("../views/juecheye.vue"),
            beforeEnter: (to, from, next) => {
                window.scrollTo(0, 0);
                next();
            }
        },
        // 个人页面
        {
            path: 'personalIndex',
            name: 'personalIndex',
            component: () => import("../views/personalPage/index.vue"),
            
            children:[
                {
                    path: '/accountMessage',
                    name: 'accountMessage',
                    component: () => import("../views/personalPage/sonpage/accountMessage.vue"),
                    redirect: '/index',
                    children:[
                        {
                            path: '/repswd',
                            name: 'repswd',
                            component: () => import("../views/personalPage/sonpage/accountMessagePage/repswd.vue"),
                            meta: {
                                title: '重置密码'
                            }
                        },
                        {
                            path: '/updateAddress/:id/:exist',
                            name: 'updateAddress',
                            component: () => import("../views/personalPage/sonpage/accountMessagePage/updateAddress.vue"),
                            meta: {
                                title: '编辑地址信息'
                            }
                        },
                        {
                            path: '/rephone',
                            name: 'rephone',
                            component: () => import("../views/personalPage/sonpage/accountMessagePage/restphone.vue"),
                            meta: {
                                title: '重置手机号'
                            }
                        },
                        {
                            path: '/index',
                            name: 'index',
                            component: () => import("../views/personalPage/sonpage/accountMessagePage/index.vue"),
                            meta: {
                                title: '个人信息界面首页'
                            }
                        },
                    ]
                },
                {
                    path: '/account_logout/:id',
                    name: 'account_logout',
                    component: () => import("../views/personalPage/sonpage/accountMessagePage/logout.vue"),
                },
                {
                    path: '/account_logout2',
                    name: 'account_logout2',
                    component: () => import("../views/personalPage/sonpage/accountMessagePage/logout2.vue"),
                },
                {
                    path: '/bills',
                    name: 'bills',
                    component: () => import("../views/personalPage/sonpage/bills.vue"),
                },
                {
                    path: '/help',
                    name: 'help',
                    component: () => import("../views/personalPage/sonpage/help.vue"),
                },
                {
                    path: '/identify',
                    name: 'identify',
                    component: () => import("../views/personalPage/sonpage/identify.vue"),
                },
                {
                    path: '/identifyQuery',
                    name: 'identifyQuery',
                    component: () => import("../views/personalPage/sonpage/identifyQuery.vue")
                },
                {
                    path: '/myEmail',
                    name: 'myEmail',
                    component: () => import("../views/personalPage/sonpage/myEmail.vue"),
                },
                {
                    path: '/VIP',
                    name: 'VIP',
                    component: () => import("../views/personalPage/sonpage/VIP.vue"),
                },
            ]
        },


    ]
},
{
    path: '/calendar',
    name: 'calendar',
    component: () => import( /* webpackChunkName: "quotation" */ "../views/calendar.vue"),
    meta: {
        title: 'calendar'
    }
},
]

let router = createRouter({
    history: createWebHashHistory(), //process.env.BASE_URL
    routes
})


export default router