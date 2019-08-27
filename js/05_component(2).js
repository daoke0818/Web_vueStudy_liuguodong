Vue.component('app-main-view', {
    template: '#app-main-view',
    data: function () {
        return {
            pushSubDescObj: undefined
        }
    },
    methods: {
        onChangeDescClick: function (val) {
            this.pushSubDescObj = {
                title: val,
                desc: '这是' + val + '的描述信息'
            }
        },
        onDescFontSizeClick: function () {
            this.$root.$emit('descFontSizeAdd', 1)
        }
    }
});
Vue.component('app-desc-view', {
    template: '#app-desc-view',
    props: {
        pushSubDescObj: {
            type: Object,
            default: function () {
                return {
                    title: '标题',
                    desc: '描述内容'
                }
            }
        }
    },
    data: function () {
        return {fontSize: 12}
    },
    created() {
        let $this = this;
        this.$root.$on('descFontSizeAdd', function (num) {
            $this.fontSize += num;
        })
    }
});
let app = new Vue({
    el: '#app'
});
Vue.component('app2-main-view', {
    template: '<div><slot></slot></div>'
});
let app2 = new Vue({
    el: '#app2'
});
Vue.component('app3-main-view', {
    template: '#app3-main-view',

});
let app3 = new Vue({
    el: '#app3',
    data: function () {
        return {
            blogData: {
                title: 'Blog标题',
                time: new Date(),
                desc: 'Blog内容'
            }
        }
    }
});

let app4ComponentA = {
    template: '#app4ComponentA'
};
let app4ComponentB = {
    template: '#app4ComponentB'
};
let app4ComponentC = {
    template: '#app4ComponentC'
};
let app4 = new Vue({
    el: '#app4',
    data: function () {
        return {
            componentId: app4ComponentA
        }
    },
    methods: {
        onChangeComponentClick(name) {
            this.componentId = eval('app4Component' + name)
        }
    }
});
const app5Res = {
    template: "#app5Res"
};
const app5Rej = {
    template: "#app5Rej"
};
const promiseParam = function (resolve, reject) {
    const t = Math.random() * 2;
    setTimeout(() => {
        console.log(t)
        if (t < 1) {
            resolve(app5Res)
        } else {
            reject("请求失败……")
        }
    }, t * 1000)
};
Vue.component('async-component', promiseParam);
const promise = new Promise(promiseParam);
const app5 = new Vue({
    el: '#app5',
    components: {
        'async-component2': function () {
            return promise;
        },
        'async-component3': function () {
            return{
                component:promise,
                loading:{
                    template: '<div>正在加载中……</div>'
                },
                error:app5Rej,
                delay:200,
                timeout:3000
            }
        }
    }
});





