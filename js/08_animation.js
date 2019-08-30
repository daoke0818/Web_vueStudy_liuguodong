let app = new Vue({
    el: '#app',
    data: {
        show: true
    }
});
let app2 = new Vue({
    el: '#app2',
    data: {
        show: true
    }
});
let app3 = new Vue({
    el: '#app3',
    data: {
        show: true
    },
    methods: {

        beforeEnter(el) {
            // alert('beforeEnter');
            console.log('beforeEnter');
            el.style.transformOrigin = 'left';
            el.style.opacity = 0;
            el.style.transform='rotateZ(0)'
        },
        enter(el, done) {
            // alert('enter');
            console.log('enter');
            Velocity(el, {opacity: 1, fontSize: '1.5rem',}, {duration: '600'});
            // duration默认400ms
            Velocity(el, {fontSize: '1rem'}, {complete: done})
        },
        afterEnter(el) {
            // alert('afterEnter');
            console.log('afterEnter');
        },
        enterCancelled(el) {
            alert('enterCancelled');
            console.log('enterCancelled')
        },
        beforeLeave(el) {
            console.log('beforeLeave');
        },
        leave(el, done) {
            console.log('leave');
            Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 });
            // loop表示动画从上个状态过渡到这个状态再过渡回去，一个来回算一次，值为2就是两个来回
            Velocity(el, { rotateZ: '100deg' }, { loop: 2 });
            Velocity(el, {
                rotateZ: '45deg',
                translateY: '30px',
                translateX: '30px',
                opacity: 0
            }, { complete: done })
        },
        afterLeave(el) {
            console.log('afterLeave');

        },
        leaveCancelled(el) {
            alert('leaveCancelled');
            console.log('leaveCancelled')
        }
    }
});

let app4 = new Vue({
    el:'#app4',
    data:{
        items:[1,2,3,4,5,6,7,8,9],
        nextNum:10
    },
    methods:{
        randomIndex(){
            return Math.floor(Math.random()*this.items.length)
        },
        add(){
            this.items.splice(this.randomIndex(),0,this.nextNum++)
        },
        remove(){
            this.items.splice(this.randomIndex(),1)
        }
    }
});

let app5 = new Vue({
    el:'#app5',
    data:{
        show:true
    }
});

let app6 = new Vue({
    el:'#app6',
    data:{
        show:true
    },
    methods:{
        enter(el,done){
            anime({
                targets:el,
                rotate:'-1turn',
                opacity:1,
                translateX:0,
                scale:1,
                complete(){
                    done()
                }
            })
        },
        leave(el,done){
            anime({
                targets:el,
                opacity:0,
                translateX:'250px',
                scale:2,
                complete(){
                    done()
                }
            })
        }
    }
});
let app7 = new Vue({
    el: '#app7',
    mounted(){
        this.repaint();
    },
    methods:{
        repaint(){
            anime({
                targets:['line','circle','polygon','polyline','path','rect'],
                strokeDashoffset:[anime.setDashoffset,0],
                easing: 'easeInOutSine', // 动画运动速度曲线
                duration:1500
            })
        }
    }
});






