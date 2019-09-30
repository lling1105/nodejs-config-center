<template>
    <el-container v-bind:style="{height:windowHeight+'px'}">


        <el-header>
            <el-row :gutter="20">
                <el-col :span="8"><div class="grid-content bg-purple logo"><i class="el-icon-setting"></i> Configer</div></el-col>
                <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
            </el-row>
        </el-header>
        <el-container>
            <el-aside width="200px">
                <groupsSelector></groupsSelector>
            </el-aside>
            <el-container>
                <el-main>
                    <configEditor></configEditor>




                </el-main>
                <el-footer></el-footer>
            </el-container>
        </el-container>


    </el-container>
</template>
<script>
    import groupsSelector from "../components/groupsSelector.vue";
    import configEditor from "../components/configEditor.vue"
    export default {
        components:{
            groupsSelector,
            configEditor
        },

        data() {
            return {

            }
        },
        created(){
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize)
        },
        mounted: () => {

        },
        methods:{
            handleResize() {
                this.$store.commit('setWindowSize',{width:window.innerWidth,height:window.innerHeight});
            }
        },
        computed:{
            windowHeight(){
                return this.$store.state.window_height;
            }
        }
    }
</script>

<style>
    .el-header {
        background-color: #ffffff;
        color: #333;
        text-align: center;
        line-height: 60px;
        border-bottom: 1px solid #DCDFE6;
    }

    .el-footer {
        background-color: #ffffff;
        color: #333;
        text-align: center;
        line-height: 60px;
        border-top: 1px solid #DCDFE6;
    }

    .el-aside {
        background-color: #FFFFFF;
        color: #333;
        text-align: center;
        padding:10px;
        border-right: 1px solid #DCDFE6;
    }

    .el-main {
        background-color: #FFFFFF;
        color: #333;

        line-height: 160px;
    }
    body {
        margin:0px;
        overflow-x: hidden;
        overflow-y: hidden;
    }
    body > .el-container {
        margin-bottom: 40px;

    }
    .logo{
        font-size: 28px;
        color:#409EFF;
        text-align: left;
        font-weight: bolder;
    }


</style>