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
            // alert($this.fontSize)
            $this.fontSize += num;
        })
    }
});
let app = new Vue({
    el: '#app'
});
Vue.component('app2-main-view',{
    template:'<div><slot></slot></div>'
});
let app2 = new Vue({
   el:'#app2'
});









