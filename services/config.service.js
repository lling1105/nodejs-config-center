"use strict";

module.exports = {
	name: "config",

	/**
	 * Service settings
	 */
	settings: {

	},

	/**
	 * Service dependencies
	 */
	dependencies: [],	

	/**
	 * Actions
	 */
	actions: {

		getGroups(){
			return ["MAPI","FILESRV","WEB"];
		},
		getConfig: {
			params:{
				configGroup:"string"
			},
			handler(ctx) {
				return {
					version:1,
					configs:{"a": 1, "b": 2}
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
	events: {

	},

	/**
	 * Methods
	 */
	methods: {

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