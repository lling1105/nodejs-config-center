<template>
    <div id="jsoneditor" v-bind:style="{height:windowHeight+'px'}"></div>
</template>

<script>
    export default {
        mounted() {
            this.initiate();
        },
        computed:{
            windowHeight(){
                return this.$store.state.window_height-160;
            }
        },
        methods: {
            initiate() {
                const schema = {
                    "title": "Employee",
                    "description": "Object containing employee details",
                    "type": "object",
                    "properties": {
                        "firstName": {
                            "title": "First Name",
                            "description": "The given name.",
                            "examples": [
                                "John"
                            ],
                            "type": "string"
                        },
                        "lastName": {
                            "title": "Last Name",
                            "description": "The family name.",
                            "examples": [
                                "Smith"
                            ],
                            "type": "string"
                        },
                        "gender": {
                            "title": "Gender",
                            "enum": ["male", "female"]
                        },
                        "availableToHire": {
                            "type": "boolean",
                            "default": false
                        },
                        "age": {
                            "description": "Age in years",
                            "type": "integer",
                            "minimum": 0,
                            "examples": [28, 32]
                        },
                        "job": {
                            "$ref": "job"
                        }
                    },
                    "required": ["firstName", "lastName"]
                }

                const job = {}

                const json = {
                    firstName: 'John',
                    lastName: 'Doe',
                    gender: null,
                    age: "28",
                    availableToHire: true,
                    job: {
                        company: 'freelance',
                        role: 'developer',
                        salary: 100
                    }
                }

                const options = {
                    schema: schema,
                    schemaRefs: {"job": job},
                    mode: 'tree',
                    modes: ['tree', 'preview']
                }

                // create the editor
                const container = document.getElementById('jsoneditor')
                const editor = new JSONEditor(container, options, json)
            }
        }
    }
</script>

<style>

</style>