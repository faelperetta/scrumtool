Ext.define('ScrumTool.model.Sprint', {
	extend: 'Ext.data.Model',
	
	fields: [
	         {name: 'id'},
	         {name: 'name'},
	         {name: 'startDate'},
	         {name: 'endDate'},
	         {name: 'sprint'},
	         {name: 'stories', defaultValue: null}
	]
});