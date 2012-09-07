Ext.define('ScrumTool.store.Menus', {
	extend: 'Ext.data.Store',
	model: 'ScrumTool.model.Menu',
	
	data: [{
		id: 1,
		name: 'Projetos'
	}, {
		id: 2,
		name: 'Backlog'
	},{
		id: 3,
		name: 'Sprints'
	}, {
		id: 4,
		name: 'Users'
	}]
});