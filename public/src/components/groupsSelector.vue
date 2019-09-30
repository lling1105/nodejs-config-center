<template>

    <el-select v-model="selectedGroup" v-on:change="groupChanged" placeholder="Select Config Group">
        <el-option
                v-for="item in groups"
                :key="item"
                :label="item"
                :value="item"
        >
        </el-option>
    </el-select>
</template>

<script>

    export default {

        data(){
            return {
                selectedGroup:null
            }
        },
        computed:{
            groups(){
                return this.$store.state.groups
            }
        },
        mounted: ()=>{

        },
        methods:{
            groupChanged(groupName){
                this.$store.commit('setSelectedGroup',groupName);
            }
        }

    }
</script>