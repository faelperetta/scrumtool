Ext.define('ScrumTool.store.Tasks', {
	extend: 'Ext.data.Store',
	requires: 'ScrumTool.model.Task',
	model: 'ScrumTool.model.Task',
	
	groupField: 'storyName',
	
	proxy: {
		type: 'ajax',
		
		api: {
			create: 'tasks/save',
			read: 'tasks/all',
			update: 'tasks/save'
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