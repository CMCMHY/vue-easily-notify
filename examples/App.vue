<template>
    <div id="app">
        <div class="out">
            <button type="button" @click.stop.prevent="show(0)">success</button>
            <button type="button" @click.stop.prevent="show(1)">info</button>
            <button type="button" @click.stop.prevent="show(2)">error</button>
            <button type="button" @click.stop.prevent="show(3)">warning</button>
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
            show(index){
                switch (index) {
                    case 0:
                        this.$hnotify.success({text:'success'}, function () {  //移动端适配方案是根字号大小的则传mode:root ,其他情况mode不传或为空
                            console.log('call back')
                        });
                        break;
                    case 1:
                        this.$hnotify.info({text:'info'}, function () {  //移动端适配方案是根字号大小的则传mode:root ,其他情况mode不传或为空
                            console.log('call back')
                        });
                        break;
                    case 2:
                        this.$hnotify.error({text:'error'}, function () {  //移动端适配方案是根字号大小的则传mode:root ,其他情况mode不传或为空
                            console.log('call back')
                        });
                        break;
                    case 3:
                        this.$hnotify.warning({text:'warning'}, function () {  //移动端适配方案是根字号大小的则传mode:root ,其他情况mode不传或为空
                            console.log('call back')
                        });
                        break;
                    default:
                        this.$hnotify.success({text:'success'}, function () {  //移动端适配方案是根字号大小的则传mode:root ,其他情况mode不传或为空
                            console.log('call back')
                        });
                }
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
