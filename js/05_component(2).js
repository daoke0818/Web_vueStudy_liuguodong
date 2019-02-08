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
    data:function(){
        return{
            componentId:app4ComponentA
        }
    },
    methods: {
        onChangeComponentClick: function (name) {
            console.log(name)
            this.componentId = eval('app4Component' + name)

        }
    }
});






