<template>
    <transition name="fade">
        <div class="line" v-bind:class="classObject" v-show="show">{{text}}</div>
    </transition>
</template>
<script>
    export default {
        name: 'VMessage',
        data() {
            return {
                rootMode: false // html 字号模式
            }
        },
        props: {
            type: {
                type: String,
                default: 'info',
                validator: val => ['info', 'success', 'warning', 'error'].includes(val)
            },
            mode: {
                type: String,
                default: ''
            },
            text: {
                type: String,
                default: ''
            },
            show: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            classObject: function () {
                return {
                    'root-mode': this.mode  === 'root',
                    'success': this.type === 'success',
                    'info': this.type === 'info',
                    'warning': this.type === 'warning',
                    'error': this.type === 'error'
                }
          }
          },
        created() {},
        mounted() {
            //this.rootMode = this.checkRem();
        },
        methods: {
            // checkRem() {
            //     let docEl = document.documentElement;
            //     let style = window.getComputedStyle(docEl, null).getPropertyValue('font-size');
            //     let fontSize = parseFloat(style);
            //     return fontSize > 16;
            // }
        }
    }
</script>

<style lang="scss">
    @import "./styles/_index";
    .line {
        position: fixed;
        padding: 0 20px;
        top: 30px;
        left: 50%;
        transform: translate(-50%, 0);
        height: 54px;
        line-height: 54px;
        text-align: left;
        font-size: 14px;
        color: #333333;
        background: #FFFFFF;
        box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.20);
        border-radius: 5px;
        z-index: 999999999;
        &:before {
            content: '';
            margin-right: 10px;
            display: inline-block;
            vertical-align: middle;
            width: 24px;
            height: 24px;
            background: url("./imgs/success.png") no-repeat center center;
            background-size: 100% 100%;
        }
        &.info{
            &:before {
                background: url("./imgs/info.png") no-repeat center center;
                background-size: 100% 100%;
            }
        }
        &.error{
            &:before {
                background: url("./imgs/error.png") no-repeat center center;
                background-size: 100% 100%;
            }
        }
        &.warning{
            &:before {
                background: url("./imgs/warning.png") no-repeat center center;
                background-size: 100% 100%;
            }
        }
    }
    .fade-enter-active, .fade-leave-active {
        transition: all 100ms linear;
    }

    .fade-enter,.fade-leave-to {
        transform: translate(-50%, -40px);
     }
    @media screen and (max-width: 767.9px) {
        .line {
            width: px2rem(480px);
            padding: px2rem(30px);
            opacity: 1;
            top: 50%;
            left: 50%;
            transform:scale(1) translate(-50%, -50%);
            height: auto;
            line-height: px2rem(40px);
            background: rgba(0,0,0,.8);
            box-shadow: 0 0 px2rem(20px) 0 rgba(0, 0, 0, 0.20);
            border-radius: px2rem(20px);
            font-family: PingFangSC-Regular;
            font-size: px2rem(28px);
            color: #FFFFFF;
            letter-spacing: 0;
            text-align: center;
            &:before {
                margin-right:auto;
                margin-left:auto;
                margin-bottom:px2rem(20px);
                display: block;
                width: px2rem(60px);
                height: px2rem(60px);
                background: url("./imgs/mobile_success.png") no-repeat center center;
                background-size: 100% 100%;
            }
            &.info{
                &:before {
                    background: url("./imgs/mobile_info.png") no-repeat center center;
                    background-size: 100% 100%;
                }
            }
            &.error{
                &:before {
                    background: url("./imgs/mobile_error.png") no-repeat center center;
                    background-size: 100% 100%;
                }
            }
            &.warning{
                &:before {
                    background: url("./imgs/mobile_warning.png") no-repeat center center;
                    background-size: 100% 100%;
                }
            }

        }
         .root-mode{
             width: 4.8rem;
             padding: .3rem;
             line-height:.4rem;
             box-shadow: 0 0 .1rem 0 rgba(0, 0, 0, 0.20);
             border-radius: .2rem;
             font-size: .28rem;
             &:before {
                 margin-bottom:.2rem;
                 width: .6rem;
                 height: .6rem;
                 background: url("./imgs/mobile_success.png") no-repeat center center;
                 background-size: 100% 100%;
             }
        }
        .fade-enter,.fade-leave-to{
            left: 50%;
            top: 50%;
            opacity: 0;
            transform:translate(-50%, -50%);
        }
    }

</style>
