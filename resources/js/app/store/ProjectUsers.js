Ext.define('ScrumTool.store.ProjectUsers', {
	extend: 'Ext.data.Store',
	requires: 'ScrumTool.model.User',
	model: 'ScrumTool.model.User',
	
	proxy: {
		type: 'ajax',
		method: 'post',
		url: 'users/projectusers',
		
		reader: {
			type: 'json',
			root: 'result',
			successProperty: 'success'
		}
	},
	
	autoLoad: true
});