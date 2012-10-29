Ext.define('ScrumTool.store.Tasks', {
	extend: 'Ext.data.Store',
	requires: 'ScrumTool.model.Task',
	model: 'ScrumTool.model.Task',
	
	groupField: 'storyName'
	
	/* data : [
	         {id: 1, storyName: 'Story 1', description: 'Spencer'},
	         {id: 2, storyName: 'Story 1', description: 'Maintz'},
	         {id: 3, storyName: 'Story 2', description: 'Conran'},
	         {id: 4, storyName: 'Story 2', description: 'Avins'},
	         {storyName: 'Story 3', description: null},
	     ]*/
});