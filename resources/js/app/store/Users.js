Ext.define('ScrumTool.store.Users', {
	extend: 'Ext.data.Store',
	requires: 'ScrumTool.model.User',
	model: 'ScrumTool.model.User',
	
	proxy: {
		type: 'ajax',
		method: 'post',
		
		api: {
			create: 'users/save',
			read: 'users/all',
			update: 'users/save',
			destroy: 'users/delete'
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