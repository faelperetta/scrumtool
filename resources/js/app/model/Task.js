Ext.define('ScrumTool.model.Task', {
	extend: 'Ext.data.Model',
	
	fields: [
	         {name: 'id'},
	         {name: 'description'},
	         {name: 'story'},
	         {name: 'user'},
	         {name: 'storyName'}
	]
});