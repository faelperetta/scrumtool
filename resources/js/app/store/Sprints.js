Ext.define('ScrumTool.store.Sprints', {
	extend: 'Ext.data.Store',
	requires: 'ScrumTool.model.Sprint',
	model: 'ScrumTool.model.Sprint',
	
	proxy: {
		type: 'ajax',
		method: 'post',
		
		api: {
			create: 'sprints/all'
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
	}
	
});