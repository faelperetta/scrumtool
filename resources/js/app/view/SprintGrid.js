Ext.define('ScrumTool.view.SprintGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.sprintgrid',
	
	store: 'Sprints',
	
	title: 'Sprint',
	border: false,
	
	initComponent: function() {
		var me = this;
		
		me.tbar = {
	            items: [{
	                text: 'Nova Sprint',
	                action: 'newSprint',
	                scope: this
	            }]
		};
		
		me.columns = [{
			text: 'Titulo',
			dataIndex: 'name',
			flex: 1
		}];
		
		this.callParent(arguments);
	}
});