Ext.define('ScrumTool.model.Sprint', {
	extend: 'Ext.data.Model',
	
	fields: [
	         {name: 'id'},
	         {name: 'name'},
	         {name: 'stories', defaultValue: null}
	]
});