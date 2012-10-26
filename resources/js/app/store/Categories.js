Ext.define('ScrumTool.store.Categories', {
	extend: 'Ext.data.Store',
	model: 'ScrumTool.model.Category',
	
	proxy: {
		type: 'ajax',
		method: 'post',
		
		api: {
			read: 'categories/all'
		},
		
		reader: {
			type: 'json',
			root: 'result'
		}
	},
	
	autoLoad: true
	
});