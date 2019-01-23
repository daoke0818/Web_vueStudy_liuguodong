document.addEventListener('DOMContentLoaded', function (event) {
    console.log('DOMContentLoaded:' + new Date().getTime())
});
let app = new Vue({
    el: '#app',
    data: {
        message: 'hello vue!',
        title: '这里是标题title',
        src: 'http://p2.music.126.net/dB_Y98VU6CFtXQ_-Bi88pQ==/18680702557664610.jpg?param=150y150',
        alt: '这里将出现图片'
    }
});
let app2 = new Vue({
    el: '#app2',
    data: {
        number: 1,
        isShow: false
    }
});
let app3 = new Vue({
    el: '#app3',
    data: {
        items: [
            {name: 'life', price: 800},
            {name: 'game', price: 6},
            {name: 'eat', price: 18},
        ]
    },
    /*method:{
        function(){
            this.items.push({name:'drink',price:20})
        }
    }*/
});
let app4 = new Vue({
    el: '#app4',
    data: {
        obj: {
            name: 'dream',
            price: '65536',
            time: 'all the time'
        }
    }
});
let app5 = new Vue({
    el: '#app5',
    data: {
        testTitle1Key: 'testTitle1Key',
        testTitle2Key: 'testTitle2Key',
        testTitle3Key: 33,
        testTitle4Key: 44,
        testObj: {name: 'objName'},
        testObj2: {
            name: 'objName',
            toString: function () {
                return 'testObj重写toString'
            }
        },
        testArr: [1, 1, 2, 3, 5, 8],
        testArr2: [1, 1, 2, 3, 5, 8],
        testMethod: function () {
            let sum = 1 + 2;
            return '1+2=' + sum;
        }
    },
    method: {
        x: () => {
            this.testArr2.toString = function () {
                alert(1);
                return '数组重写toString'
            }
        }
    }
});
let app6 = new Vue({
    el: '#app6',
    data: {
        isRed: true,
        isBlue: true,
        testClassObj: {
            'text-success': true
        },
        testClassArr: ['text-primary', 'underLine'],
        testFontSize: 24,
        testDisplay: {
            display: ['-webkit-box', '-ms-flexbox', 'flex']
        }

    }
});
let app7 = new Vue({
    el: '#app7',
    data: {
        testText: '',
        testCheckbox: [],
        testRadio: [],
        testSelect: [],
        testSelectMul: [],
        testLazy: '',
        testNumber: '',
        testTrim: ''
    }
});
let app8 = new Vue({
    el: '#app8',
    data: {
        counter:0,
        inputMsg:''
    },
    methods:{
        testOnclickMethods:function (event) {
            alert('Hello VUE!');
            if(event){
                alert(event.target.tagName)
            }
        },
        onSumClick:function (n1,n2) {
            alert(n1+n2)
        },
        onChange:function () {
            console.log(this.inputMsg)
        }
    }
});














