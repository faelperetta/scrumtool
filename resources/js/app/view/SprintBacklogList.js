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
	            }, {
	            	text: 'Visualizar Burndown',
	            	action: 'showBurndown',
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
		
		me.columns = [{
			text: 'Tarefa',
			dataIndex: 'description',
			flex:1,
			summaryType: 'count',
	        summaryRenderer: function(value){
	            return Ext.String.format('{0} tarefa{1}', value, value !== 1 ? 's' : '');
	        }
		},{
			text: 'Responsável',
			dataIndex: 'user',
			renderer: function(value) {
				if (value) {
					return value.name;
				}
			},
			width: 150
		},{
			text: 'Status',
			dataIndex: 'status',
			align: 'center',
			width: 80
		},{
			text: 'Horas',
			dataIndex: 'hours',
			width: 60,
			align: 'center',
			summaryType: 'sum',
	        summaryRenderer: function(value){
	            return value;
	        }
		}];
		
		me.callParent(arguments);
	}
	
});