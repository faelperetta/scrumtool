Ext.define('ScrumTool.store.ChartData', {
	extend: 'Ext.data.Store',
	fields: ['name', 'planned', 'done'],
	
	proxy: {
		type: 'ajax',
		method: 'get',
		
		url: 'sprints/burndown',
		
		reader: {
			type: 'json',
			root: 'result'
		}
	}	
});