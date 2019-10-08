"use strict";
const fs = require("fs");
const path = require("path");
const schemaPath = path.join(__dirname, '..', 'config_schema');
const { MoleculerError } = require("moleculer").Errors;
module.exports = {
    name: "config",

    /**
     * Service settings
     */
    settings: {},

    /**
     * Service dependencies
     */
    dependencies: [],

    /**
     * Actions
     */
    actions: {

        getGroups() {
            return this.getSchemaList();
        },
        getSchema: {
            params: {
                configGroup: "string"
            },
            async handler(ctx) {
				let jsonSchema = await this.getSchemaJson(ctx.params.configGroup);
                try{
                    let schemaJSON = JSON.parse(jsonSchema);
                    return schemaJSON;
                }catch(err){
                    return new MoleculerError("Not valid JSON schema file", 501, "Invalid JSON", { configGroup:ctx.params.configGroup });

                }

            }
        },
        getConfig: {
            params: {
                configGroup: "string"
            },
            handler(ctx) {
                return {
                    version: 1,
                    configs: {"a": 1, "b": 2}
                };
            }
        },


        saveConfig: {
            params: {
                name: "string"
            },
            handler(ctx) {
                return `Welcome, ${ctx.params.name}`;
            }
        }
    },

    /**
     * Events
     */
    events: {},

    /**
     * Methods
     */
    methods: {
        getSchemaList() {
            return new Promise((resolve, reject) => {
                fs.readdir(schemaPath, function (err, files) {
                    if (err) {
                        reject(err);
                    } else {
                        let list = files.filter(item => {
                            return fs.statSync(path.join(schemaPath, item)).isFile() &&
                                path.extname(item) === '.json'
                        }).sort();
                        resolve(list);
                    }
                })
            });
        },
        async getSchemaJson(configGroup) {
            let fileFullPath = path.join(schemaPath,configGroup);

            if(fs.existsSync(fileFullPath)){
                let jsonstring = fs.readFileSync(fileFullPath);
                return jsonstring.toString()
            }else{
                throw new MoleculerError("file not existed",501,"file not existed",{})
            }

        }
    },

    /**
     * Service created lifecycle event handler
     */
    created() {

    },

    /**
     * Service started lifecycle event handler
     */
    started() {

    },

    /**
     * Service stopped lifecycle event handler
     */
    stopped() {

    }
};