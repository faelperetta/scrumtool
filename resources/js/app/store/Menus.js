Ext.define('ScrumTool.store.Menus', {
	extend: 'Ext.data.Store',
	model: 'ScrumTool.model.Menu',
	
	data: [{
		id: 1,
		name: 'Projetos',
		type: ''
	}, {
		id: 2,
		name: 'Backlog',
		type: 'storygrid'
	},{
		id: 3,
		name: 'Sprints',
		type: 'sprintmanagement'
	}, {
		id: 4,
		name: 'Users',
		type: ''
	}]
});