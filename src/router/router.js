import Main from '@/views/Main.vue';

// 首页路由

export const HomeRouter={
    path: '/home',
    name: 'home',
    component: () => import('@/views/homes/Home.vue')

};

// 产品服务路由

export const ProductRouter={
    path: '/product',
    name: 'product',
    component: () => import('@/views/product/Product.vue')

};

// 信息系统集成路由

export const InformationtRouter={
    path: '/information',
    name: 'information',
    component: () => import('@/views/information/Information.vue')

};

// 互联网+路由

export const InternetRouter={
    path: '/internet',
    name: 'internet',
    component: () => import('@/views/internet/Internet.vue')

};


// 政府综合业务管理

export const GovernmentRouter={
    path: '/government',
    name: 'government',
    component: () => import('@/views/government/Government.vue')

};


// 电子化评审路由
export const ElectronRouter={
    path: '/electron',
    name: 'electron',
    component: () => import('@/views/electron/Electron.vue')
};
// 三维建模
export const SmartRouter={
    path: '/smart',
    name: 'smart',
    component: () => import('@/views/smart/Smart.vue')
};

// 三维建模
export const ModelRouter={
    path: '/model',
    name: 'model',
    component: () => import('@/views/model/Model.vue')
};

// 关于我们
export const AboutRouter={
    path: '/about',
    name: 'about',
    component: () => import('@/views/about/About.vue')
};


export const loginRouter = {
    path: '/login',
    name: 'login',
    meta: {
        title: '登录 - YUSUI '
    },
    component: () => import('@/views/login.vue')
};

export const registRouter = {
    path: '/regist',
    name: 'regist',
    meta: {
        title: '注册 - YUSUI'
    },
    component: () => import('@/views/regist.vue')
};

export const registResult = {
    path: '/regist-result',
    name: 'regist-result',
    meta: {
        title: '注册结果 - YUSUI'
    },
    component: () => import('@/views/regist-result.vue')
};


export const page403 = {
    path: '/403',
    meta: {
        title: '403-权限不足'
    },
    name: 'error-403',
    component: () => import('@/views/error-page/403.vue')
};

export const page500 = {
    path: '/500',
    meta: {
        title: '500-服务端错误'
    },
    name: 'error-500',
    component: () => import('@/views/error-page/500.vue')
};

export const locking = {
    path: '/locking',
    name: 'locking',
    component: () => import('@/views/main-components/lockscreen/components/locking-page.vue')
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
    path: '/',
    name: 'otherRouter',
    redirect: '/home',
    component: Main,
    children: [
        { path: 'home', title: { i18n: 'home' }, name: 'home_index', component: () => import('@/views/home/home.vue') },
        { path: 'ownspace', title: '个人中心', name: 'ownspace_old', component: () => import('@/views/own-space/own-space.vue') },
        { path: 'change-pass', title: '修改密码', name: 'change_pass', component: () => import('@/views/change-pass/change-pass.vue') },
        { path: 'message', title: '消息中心', name: 'message_index', component: () => import('@/views/message/message.vue') },
        { path: 'add', title: '添加', name: 'add', component: () => import('@/views/xboot-vue-template/new-window/add.vue') },
        { path: 'edit', title: '编辑', name: 'edit', component: () => import('@/views/xboot-vue-template/new-window/edit.vue') },
        { path: 'message-send-detail', title: '消息发送详情', name: 'message_send_detail', component: () => import('@/views/sys/message-manage/messageSendDetail.vue') }
    ]
};



export const appRouter = [];

// 所有上面定义的路由都要写在下面的routers里 暴露路由
export const routers = [
    HomeRouter,
    ProductRouter,
    InformationtRouter,
    InternetRouter,
    GovernmentRouter,
    ElectronRouter,
    ModelRouter,
    SmartRouter,
    AboutRouter,
    loginRouter,
    registRouter,
    registResult,
    locking,
    ...appRouter,
    page500,
    page403
];
