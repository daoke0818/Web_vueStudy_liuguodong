let app = new Vue({
    el: '#app',
    data: {
        message: 'hello vue!',
    }
});
let app2 = new Vue({
    el:'#app2',
   data:{
        books:[
            {name:'javaScript',number:2,price:35},
            {name:'java',number:1,price:45},
            {name:'设计模式之禅',number:2,price:50},
            {name:'编程大法',number:10,price:24},
        ]
   },
    methods:{
        totalPrice:function () {
            let total = 0;
            this.books.forEach(book=>{
                total+= book.number*book.price;
            });
            return total;
        }
    }
});













