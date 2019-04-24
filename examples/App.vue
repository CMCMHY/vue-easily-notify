<template>
    <div id="app">
        <div class="out">
            <button type="button" @click.stop.prevent="show">点击测试</button>
        </div>
    </div>
</template>

<script>


    export default {
        data() {
            return {}
        },

        created(){},
        mounted(){},
        methods:{
            show(){
                // this.$hnotify.success({text:'success'}, function () {  //移动端适配方案是根字号大小的则传mode:root ,其他情况mode不传或为空
                //     console.log(1111)
                // })
                // this.$hnotify.info({text:'info', mode:'root'}, function () {
                //     console.log(2222)
                // })
                // this.$hnotify.error({text:'error', mode:'root'}, function () {
                //     console.log(3333)
                // })
                this.$hnotify.warning({text:'warning'}, function () {
                    console.log(4444)
                })
            }
        }
    }
</script>

<style lang="scss">
    @import "assets/style.scss";
    .out{
        button{
            display: inline-block;
            padding:10px 20px;
        }
    }
</style>
