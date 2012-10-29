Ext.define('ScrumTool.view.SprintBacklogList', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.sprintbackloglist',
	title: 'Sprint Backlog',
	hideHeaders: true,
	padding:10,
	
	initComponent: function() {
		var me = this;
		
		me.tbar = {
	            items: [{
	                text: 'Nova Tarefa',
	                action: 'newTask',
	                scope: this
	            }]
		};
		
		me.features = [{
			id: 'group',
            ftype: 'groupingsummary',
            groupHeaderTpl: '{name}',
            hideGroupedHeader: true,
            enableGroupingMenu: false
		}];
		
		me.store = 'Tasks',
		
		
		me.viewConfig = {
			getRowClass: function(rec) {
            	console.log(rec);
            	if (rec.data.description == null) return 'x-hide-display';
            }
		},
		
		me.columns = [{
			dataIndex: 'description',
			flex:1
		}];
		
		me.callParent(arguments);
	}
	
});