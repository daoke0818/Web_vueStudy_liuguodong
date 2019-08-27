const one = {
    template:'<div>这里是one的视图</div>'
};
const two = {
    template:'<div>这里是two的视图</div>'
};
const routes = [{
    path:'/one',
    component:one
},{
    path:'/two',
    component:two
}];
const router = new VueRouter({
   routes:routes
});

const app = new Vue({
    router:router,
    el:"#app"
});

const app2One = {
    template:'<p>这是one视图</p>'
};
const app2User = {
    template:`<div>
            <p>这是user视图</p>
            <p>$router.params: {{$route.params}}</p>
            <p>$router.query: {{$route.query}}</p>
        </div>`
};
const app2Routes = [{
    path:'/one',
    component:app2One
},{
    path:'/user/:id',
    name:'user',
    component:app2User
}];
const app2router = new VueRouter({
    routes:app2Routes,
    mode: 'history'
});
const app2 = new Vue({
    router:app2router,
    el:'#app2',
    methods:{
        toNameClick:function () {
            this.$router.push({
                name:'user',
                params:{
                    id:'HaDi'
                }
            });
        },
        toPathClick:function () {
            this.$router.push({
                path:'/user/Black?name=MaDan',
                query:{
                    weight:3.6
                }
            });
        }
    }
});

const app3sup = {
    template:'#app3-sup'
};
const app3Sub1 = {
    template:'<div>这是sub1内容</div>'
};
const app3Sub2 = {
    template:'<div>这是sub2内容</div>'
};
const app3Routes = [{
    path:'/',
    component:app3sup,
    children:[{
        path:'sub1',
        component:app3Sub1
    },{
        path:'sub2',
        component:app3Sub2
    }]
}];
const app3Router = new VueRouter({
    routes:app3Routes
});
const app3 = new Vue({
    el:'#app3',
    router:app3Router
});