import Message from './src/Vmessage'
const vueEasilyNotify = {
    duration: 5000,
    animateTime: 300,
    install(Vue) {
        if (typeof window !== 'undefined' && window.Vue) {
            Vue = window.Vue
        }
        Vue.component('Message', Message)

        function msg(type, data, callBack) {
            let msg, mode, duration = vueEasilyNotify.duration;
            msg = data['text'];
            mode = data['mode']  || ''
            let VueMessage = Vue.extend({
                render(h) {
                    let props = {
                        type,
                        mode,
                        text: msg,
                        show: this.show
                    };
                    return h('message', {props})
                },
                data() {
                    return {
                        show: false
                    }
                }
            });
            let newMessage = new VueMessage();
            let vm = newMessage.$mount();
            let el = vm.$el;
            document.body.appendChild(el);
            vm.show = true;
            let t1 = setTimeout(() => {
                clearTimeout(t1)
                vm.show = false ;
                let t2 = setTimeout(() => {
                    clearTimeout(t2)
                    document.body.removeChild(el) ;
                    newMessage.$destroy()
                    vm = null ;
                    callBack && (typeof callBack === 'function') && callBack()
                }, vueEasilyNotify.animateTime)
            }, duration)
        }

        Vue.prototype.$hnotify = {
            info(data, callBack) {
                if (!data['text']) return;
                msg('info', data, callBack)
            },
            success(data, callBack) {
                if (!data['text']) return;
                msg('success', data, callBack)
            },
            error(data, callBack) {
                if (!data['text']) return;
                msg('error', data, callBack)
            },
            warning(data, callBack) {
                if (!data['text']) return;
                msg('warning', data, callBack)
            }
        }
    }
}
export default vueEasilyNotify
