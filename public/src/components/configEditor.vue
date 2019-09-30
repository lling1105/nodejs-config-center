<template>
    <div id="jsoneditor" v-bind:style="{height:windowHeight+'px'}"></div>
</template>

<script>
    import data from "../helper/data"
    export default {
        mounted() {
            this.initiate();
        },
        data() {
            return {
                schemaJson: {},
                configJson: {}
            }
        },
        computed: {
            windowHeight() {
                return this.$store.state.window_height - 160;
            }


        },
        watch: {
            '$store.state.selectedGroup':async function (newValue, oldValue) {
                this.schemaJson = await this.loadSchema(newValue);
                this.initiate();
            }
        },
        methods: {
            initiate() {
                const schema = this.schemaJson;
                const options = {
                    schema: schema,
                    mode: 'text',
                    modes: ['text', 'tree', 'preview']
                }

                // create the editor
                const container = document.getElementById('jsoneditor')
                const editor = new JSONEditor(container, options, this.configJson)
            },
            async loadSchema(groupName){
                this.schemaJson = await data.getGroupSchema(groupName);
            }
        }
    }
</script>

<style>

</style>