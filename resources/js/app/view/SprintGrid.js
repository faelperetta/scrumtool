Ext.define('ScrumTool.view.SprintGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.sprintgrid',
	
	store: 'Sprints',
	id: 'sprintGrid',
	
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
		}, {
			xtype: 'actioncolumn',
			width: 45,
			items: [{
				icon: 'resources/images/edit.png',
				tooltip: 'Editar',
				handler: function(grid, rowIndex, colIndex) {
					Ext.getCmp('sprintGrid').fireEvent('editsprint', grid, rowIndex, colIndex);
				}
			},{
				icon: 'resources/images/delete.png',
				tooltip: 'Excluir'
			}]
		}];
		
		this.callParent(arguments);
	}
});