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
    methods: {
        onChangeDescClick: function (type) {
            this.desc = '描述信息：这是' + type + '系统'
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
    methods: {
        onChangeDescClick: function (type) {
            this.desc = '描述信息：这是' + type + '系统'
        },
    }
});
Vue.component('app6-desc-view', {
    template: '<p>{{pushSubDesc}}<br>' +
        '<button class="btn btn-sm btn-primary" @click="tryChangeSubProps">直接修改子组件的属性为windows</button></p>',
    props: {
        pushSubDesc: ''
    },
    methods: {
        tryChangeSubProps: function () {
            this.pushSubDesc = 'windows' //这样会出警告
        }
    }
});
let app6 = new Vue({
    el: '#app6'
});
// ----------------------------------------------------------------------------
Vue.component('app7-main-view', {
    template: '#app7-main-view',
    data: function () {
        return {
            desc: '描述信息：'
        }
    },
    methods: {
        onChangeDescClick: function (type) {
            this.desc = type
        },
    }
});
Vue.component('app7-desc-view', {
    template: '<p>这是 {{subDesc}} 系统<br>' +
        '<button class="btn btn-sm btn-primary" @click="tryChangeSubProps">修改子组件参数为windows</button></p>',
    props: {
        pushSubDesc: ''
    },
    data: function () {
        return {
            subDesc: '未知'
        }
    },
    watch: {
        pushSubDesc: function () {
            this.subDesc = this.pushSubDesc;
        }
    },
    methods: {
        tryChangeSubProps: function () {
            this.subDesc = 'windows'
        }
    }
});
let app7 = new Vue({
    el: '#app7'
});
// -----------------------------------------------------------
Vue.component('app8-main-view', {
    template: '#app8-main-view',
    data: function () {
        return {
            desc: '默认描述信息'
        }
    },
    methods: {
        onChangeDescClick: function (type) {
            this.desc = type
        },
    }
});
Vue.component('app8-desc-view', {
    template: '<p>这是 {{subDesc}} 系统<br></p>',
    props: {
        pushSubDesc: ''
    },
    data:function(){
        return {}
    },
    computed: {
        subDesc: {
            get: function () {
                return this.pushSubDesc.toLocaleUpperCase();
            },
        },

    },
});
let app8 = new Vue({
    el: '#app8'
});
// ----------------------------------------------------------------------------
Vue.component('app9-main-view', {
    template: '#app9-main-view',
    data: function () {
        return {
            // 这里写成undefined可以保证初始化时不向子组件传递参数，会展示子组件默认值
            descObj: undefined
        }
    },
    methods: {
        onChangeDescClick: function (type) {
            this.descObj = {
                title: type,
                msg: '这里是' + type + '的信息。'
            }
        }
    }
});
Vue.component('desc-view', {
    //下面最外层的div不能写成p标签，因为p标签被内部的块元素割开后会导致模板最外成有多个元素。
    template: '<div><h4>{{pushSubDescObj.title}}</h4><div class="my-3">{{pushSubDescObj.msg}}</div></div>',
    props: {
        pushSubDescObj: {
            type: Object,
            default: function () {
                return {
                    title: '这里是默认标题',
                    msg: '这里是默认描述信息'
                }
            }
        }
    }
});
let app9 = new Vue({
    el: '#app9'
});













