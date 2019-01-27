let app = new Vue({
    el: '#app',
    data: {
        message: 'hello vue!',
    }
});
let app2 = new Vue({
    el: '#app2',
    data: {
        soul: 0,
        testCounter: 0,
        books: [
            {name: 'javaScript', number: 2, price: 35},
            {name: 'java', number: 1, price: 45},
            {name: '设计模式之禅', number: 2, price: 50},
            {name: '编程大法', number: 10, price: 24},
        ]
    },
    methods: {
        domChange: function () {
            console.log('调用 domChange');
            this.testCounter++;
        },
        totalPrice: function () {
            // console.log('调用 totalPrice','soul:'+this.soul++);
            console.log('调用 totalPrice');

            let total = 0;
            this.books.forEach(book => {
                total += book.number * book.price;
            });
            return total;
        }
    }
});
let app3 = new Vue({
    el: '#app3',
    data: {
        testCounter: 0,
        books: [
            {name: 'javaScript', number: 2, price: 35},
            {name: 'java', number: 1, price: 45},
            {name: '设计模式之禅', number: 2, price: 50},
            {name: '编程大法', number: 10, price: 24},
        ],
        totalPrice: 0.00
    },
    methods: {
        domChange: function () {
            console.log('调用 domChange');
            this.testCounter++;
        }
    },

    watch: {
        books: {
            handler: function (val, oldVar) {
                console.log('调用 totalPrice');
                this.totalPrice = 0;
                val.forEach(book => {
                    this.totalPrice += book.number * book.price;
                });
            },
            deep: true
        },
    }
});
let app4 = new Vue({
    el: '#app4',
    data: {
        books: [
            {name: 'javaScript', number: 2, price: 35},
            {name: 'java', number: 1, price: 45},
            {name: '设计模式之禅', number: 2, price: 50},
            {name: '编程大法', number: 10, price: 24},
        ],
        totalPrice: 0
    },
    watch: {
        books: {
            handler: function (val, oldval) {
                let _this = this;
                this.totalPrice = '计算中。。。';
                setTimeout(function () {
                    _this.totalPrice = 0;
                    val.forEach(book => {
                        _this.totalPrice += book.number * book.price;
                    })
                }, 1000)

            },
            deep: true
        }
    }
});
let app5 = new Vue({
    el: '#app5',
    data: {
        firstName: 'Li',
        lastName: 'Yingjie',
        fullName: 'Li Yingjie'
    },
    watch: {
        firstName: function (val) {
            this.fullName = val + ' ' + this.lastName;
        },
        lastName: function (val) {
            this.fullName = this.firstName + ' ' + val;
        }
    }
});
let app6 = new Vue({
    el: '#app6',
    data: {
        firstName: 'Li',
        lastName: 'Yingjie',
    },
    computed: {
        fullName: function () {
            return this.fullName = this.firstName + ' ' + this.lastName;
        }
    }
});
let app7 = new Vue({
    el: '#app7',
    data: {
        books: [
            {name: 'javaScript', number: 2, price: 35},
            {name: 'java', number: 1, price: 45},
            {name: '设计模式之禅', number: 2, price: 50},
            {name: '编程大法', number: 10, price: 24},
        ],
    },
    computed: {
        totalPrice: function () {
            let total = 0;
            this.books.forEach(book => {
                total += book.number * book.price;
            });
            return total;
        }

    }
});












