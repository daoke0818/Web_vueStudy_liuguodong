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
                {name: 'javaScript', price: 35},
                {name: '设计模式之禅', price: 21},
                {name: '编程大法', price: 10},
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
        el.style.display =  binding.value?el._originalDisplay:'none'
    }
});
let app4 = new Vue({
    el: '#app4',
    data: {
        isShow: false
    }
});












