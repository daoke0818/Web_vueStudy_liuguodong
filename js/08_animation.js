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
            console.log('beforeEnter');
            el.style.transformOrigin = 'left';
            el.style.opacity = 0;
            el.style.transform='rotateZ(0)'
        },
        enter(el, done) {
            console.log('enter');
            Velocity(el, {opacity: 1, fontSize: '1.5rem',}, {duration: '600'});
            Velocity(el, {fontSize: '1rem'}, {complete: done})
        },
        afterEnter(el) {
            console.log('afterEnter');
        },
        enterCancelled(el) {
            console.log('enterCancelled')
        },
        beforeLeave(el) {
            console.log('beforeLeave');
        },
        leave(el, done) {
            console.log('leave');
            Velocity(el, { translateX: '15px', rotateZ: '50deg' }, { duration: 600 });
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
            console.log('leaveCancelled')
        }
    }
});









