let app = new Vue({
    el: '#app',
    data: {
        books: []
    },
    computed: {
        totalPrice: function () {
            let total = 0;
            if (this.books) {
                this.books.forEach((book) => {
                    total += book.price * book.number;
                });
            }
            return total;
        }
    },
    created() {
        setTimeout(() => {
            this.books = [
                {name: '乱时候穷时候', price: 35},
                {name: '甘蔗芽苦菜花', price: 21},
                {name: '姜淑梅自传', price: 10},
            ];
            this.books.forEach(book => {
                // book.number = 1; // 这种写法不能响应
                app.$set(book, 'number', 1);//注意set的$,这种写法在异步时app已经赋值，故可用，而同步时不能用，因为app未定义
                // this.$set(book, 'number', 1);//和上面相比，同步异步都可用
                // Vue.set(book, 'number', 1);//全局的，任何时候也都能用
            });

        }, 1500)
    }
});
Vue.filter('numberFilter', function (val) {
    return val.toUpperCase().substring(0, 5)
});
let app2 = new Vue({
    el: '#app2',
    data: {
        plateNum: ''
    }
});
let app3 = new Vue({
    el: '#app3',
    data: {
        plateNum: ''
    },
    filters: {
        upperCaseFilter: function (val) {
            return val.toUpperCase();
        },
        substringFilter: function (val, num) {
            return val.substring(0, num)
        }
    }
});
Vue.directive('myshow', {
    bind: function (el, binding, vnode, oldVnode) {
        el._originalDisplay = el.style.display;
        if (!binding.value) {
            el.style.display = 'none';
        }
    },
    update: function (el, binding, vnode, oldVnode) {
        if (binding.value === binding.oldValue) {
            return;
        }
        el.style.display = binding.value ? el._originalDisplay : 'none'
    }
});
let app4 = new Vue({
    el: '#app4',
    data: {
        isShow: true
    }
});
let app5 = new Vue({
    el: '#app5',
    data: {
        text: '',
        tip:''
    },
    created() {
        this.text = '加载中。。。';
        setTimeout(() => {
            this.text = '这是一段<br>很长很长很长很长很长很长很长很长<br>很长很长很长很长很长很长很长很长很长<br>很长很长很长很长很长很长很长很长很长<br>很长很长很长很长很长很长很长很长很长很长<br>的文本<br>高度一百多像素';
            let msgDom = document.getElementById('app5_msg');
            // alert('文本高度为：'+msgDom.offsetHeight+'px');
            this.$nextTick(() => {
                this.tip = '$nextTick触发，文本高度为：'+msgDom.offsetHeight+'px';
            })
        }, 1000)
    }
});











