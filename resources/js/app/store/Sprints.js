Ext.define('ScrumTool.store.Sprints', {
	extend: 'Ext.data.Store',
	requires: 'ScrumTool.model.Sprint',
	model: 'ScrumTool.model.Sprint',
	
	proxy: {
		type: 'ajax',
		method: 'post',
		
		api: {
			create: 'sprints/save',
			read: 'sprints/all',
			update: 'sprints/save'
		},

		reader: {
			type: 'json',
			root: 'result',
			successProperty: 'success'
		},
		
		writer: {
		    writeAllFields: true,
		    encode: true,
		    root: 'data'
		}
	}	
});