Vue.component('btn-success', {
    template: '<span><button class="btn btn-success" @click="onSuccessClick">自定义按钮</button></span>',
    methods: {
        onSuccessClick: function () {
            alert('点击了成功按钮')
        }
    }
});
let app = new Vue({
    el: '#app',
});
Vue.component('btn-counter', {
    template: '<div class="m-2">当前的counter：{{counter}}<button class="btn btn-secondary btn-sm mx-3" @click="counterClick">自定义按钮</button></div>',
    methods: {
        counterClick: function () {
            this.counter++;
        }
    },
    data: function () {
        return {
            counter: 0
        };
    }
});
let app2 = new Vue({
    el: '#app2',
});
let app3_btnCounter = {
    template: '<div class="m-2">当前的counter：{{counter}}<button class="btn btn-primary btn-sm mx-3" @click="counterClick">自定义按钮</button></div>',
    methods: {
        counterClick: function () {
            this.counter++;
        }
    },
    data: function () {
        return {
            counter: 0
        }
    },
};

let app3 = new Vue({
    el: '#app3',
    components: {
        'btn-count-add': app3_btnCounter
    }
});

import {app4_btnCounter} from "./04_component(1)_btn-count-add.js";

let app4 = new Vue({
    el: '#app4',
    components: {
        'btn-counter': app4_btnCounter
    }
});
Vue.component('main-view', {
    template: '#main-view',
    data: function () {
        return {
            desc: '描述信息：'
        }
    },
    methods:{
        onChangeDescClick: function (type) {
            this.desc = '描述信息：这是'+type+'系统'
        }
    }
});
let app5 = new Vue({
    el: '#app5'
});
Vue.component('app6-main-view', {
    template: '#app6-main-view',
    data: function () {
        return {
            desc: '描述信息：'
        }
    },
    methods:{
        onChangeDescClick: function (type) {
            this.desc = '描述信息：这是'+type+'系统'
        },
    }
});
Vue.component('desc-view', {
    template: '<p>{{pushSubDesc}}<br>' +
        '<button class="btn btn-sm btn-primary" @click="tryChangeSubProps">直接修改子组件的属性为windows</button></p>',
    props:{
        pushSubDesc:''
    },
    methods:{
        tryChangeSubProps:function () {
            this.pushSubDesc = 'windows'
        }
    }


});
let app6 = new Vue({
    el: '#app6'
});













