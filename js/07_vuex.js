Vue.component('app-com-1',{
    template:'#app-com-1',
    data: function () {
        return {
            count:0
        }
    },
    methods: {
        onCountClick: function () {
            this.count+=1;
        }
    }
});
Vue.component('app-com-2',{
    template:'#app-com-2',
    props:{
        count2:0
    }
});

const app = new Vue({
    el: '#app',

});

const app2Store = {
    count:0
};
Vue.component('app2-com-1',{
    template:'#app2-com-1',
    data:function () {
        return app2Store;
    },
    methods:{
        onCountClick:function () {
            this.count++;
        }
    }
});
Vue.component('app2-com-2',{
    template:'#app2-com-2',
    data:function () {
        return app2Store
    }
});
const app2 = new Vue({
    el:'#app2'

});

const app3Store ={
    debug:true,
    state:{
        count:0
    },
    mutations:{
        addCount:function (state) {
            state.count++;
        }
    }
};
Vue.component('app3-com-1',{
    template:'#app3-com-1',
    data:function () {
        return {
            //私有数据
            private:{},
            //共享数据
            shareState:app3Store.state
        }
    },
    methods:{
        onCountClick:function () {
            if(app3Store.debug){
                console.log('自增方法被调用')
            }
            app3Store.mutations.addCount(app3Store.state)
        }
    }
});
Vue.component('app3-com-2',{
    template:'#app3-com-2',
    data:function () {
        return {
            private:{},
            shareState:app3Store.state
        }
    }
});
const app3 = new Vue({
    el:'#app3',
});

const app4Store = new Vuex.Store({
    state:{
        count:0
    },
    mutations:{
        increment:function (state,num) {
            console.log('~~mutation',state.count)
            state.count++
        }
    },
    actions:{
        increment:function (context,num) {
            setTimeout(function () {
                context.commit('increment',num)
            },1000)
        }
    }
});
Vue.component('app4-com-1',{
    template:'#app4-com-1',
    methods:{
        onCountClick:function () {
            this.$store.dispatch('increment',1)
        }
    }
});
Vue.component('app4-com-2',{
    template:'#app4-com-2',
});
const app4 = new Vue({
    el:'#app4',
    store:app4Store
});








