Ext.define('ScrumTool.view.SprintBacklogList', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.sprintbackloglist',
	title: 'Sprint Backlog',
	//hideHeaders: true,
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
            	return rec.data.description == null ? 'x-hide-display' : '';
            }
		},
		
		me.columns = [{
			text: 'Tarefa',
			dataIndex: 'description',
			flex:1
		}, {
			text: 'Horas',
			dataIndex: 'hours',
			width: 40,
			align: 'center'
		}];
		
		me.callParent(arguments);
	}
	
});