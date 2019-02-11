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

