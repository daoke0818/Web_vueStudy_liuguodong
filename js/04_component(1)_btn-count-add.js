let app4_btnCounter = {
    template: '<div class="m-2">当前的counter：{{counter}}<button class="btn btn-info btn-sm mx-3" @click="counterClick">自定义按钮</button></div>',
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
export {app4_btnCounter};