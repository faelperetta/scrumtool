Ext.define('ScrumTool.store.Projects', {
	extend: 'Ext.data.Store',
	requires: 'ScrumTool.model.Project',
	model: 'ScrumTool.model.Project',
		
	proxy: {
		type: 'ajax',
		method: 'post',
		
		api: {
			create: 'projects/save',
			read: 'projects/all',
			update: 'projects/save'
		},
		
		reader: {
			type: 'json',
			root: 'result',
			successProperty: 'success'
		},
		
		writer: {
		    writeAllFields: true,
		    encode: true,
		    root: 'data',
		}
	},
	
	autoLoad: true
})