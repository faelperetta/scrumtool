Ext.define('ScrumTool.store.Stories', {
	extend: 'Ext.data.Store',
	requires: 'ScrumTool.model.Story',
	model: 'ScrumTool.model.Story',
	
	loadAvailableStories: function() {
		this.proxy.api = {};
		this.proxy.url = 'stories/availables',
		this.load();
	},
	
	proxy: {
		type: 'ajax',
		method: 'post',
		
		api: {
			create: 'stories/save',
			read: 'stories/all',
			update: 'stories/save'
		},
		
		reader: {
			type: 'json',
			root: 'result',
			successProperty: 'success'
		},
		
		writer: {
		    //type: 'json',
		    writeAllFields: true,
		    encode: true,
		    root: 'data',
			//successProperty: 'success'
		}
	}
});