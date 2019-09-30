<template>
    <el-container v-bind:style='{height:main_window.height}'>


        <el-header>Header</el-header>
        <el-container>
            <el-aside width="200px">Aside</el-aside>
            <el-container>
                <el-main>
                    main
                </el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>


    </el-container>
</template>
<script>

    export default {
        data() {
            return {
                main_window: {
                    width: 0,
                    height: 0
                }
            }
        },
        created(){
            window.addEventListener('resize', this.handleResize)
            this.handleResize();
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize)
        },
        mounted: async () => {

        },
        methods:{
            handleResize() {
                this.main_window.width = window.innerWidth;
                this.main_window.height = window.innerHeight;
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
        line-height: 200px;
        border-right: 1px solid #DCDFE6;
    }

    .el-main {
        background-color: #FFFFFF;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 40px;

    }


</style>