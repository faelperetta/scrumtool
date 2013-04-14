Ext.define('ScrumTool.view.SprintGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.sprintgrid',
	
	store: 'Sprints',
	id: 'sprintGrid',
	title: 'Sprints',
	width: 500,
	margin:10,
	
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
		},{
			text: 'Inicio',
			dataIndex: 'startDate'
		},{
			text: 'Encerramento',
			dataIndex: 'endDate'
		},{
			xtype: 'actioncolumn',
			width: 45,
			items: [{
				icon: 'resources/images/edit.png',
				tooltip: 'Editar',
				handler: function(grid, rowIndex, colIndex) {
					if (APP.currentUser.role == 'Time') {
						Ext.MessageBox.alert("Aviso", "Você não tem permissão para editar.");
						return;
					}
					Ext.getCmp('sprintGrid').fireEvent('editsprint', grid, rowIndex, colIndex);
				}
			},{
				icon: 'resources/images/delete.png',
				tooltip: 'Excluir',
				handler: function(grid, rowIndex, colIndex) {
					if (APP.currentUser.role == 'Time') {
						Ext.MessageBox.alert("Aviso", "Você não tem permissão para excluir.");
						return;
					}
					Ext.MessageBox.confirm('Confirmar', 'Tem certeza que deseja excluir esta sprint?', function(btn) {
						if (btn == 'yes') {
							Ext.getCmp('sprintGrid').fireEvent('removesprint', grid, rowIndex, colIndex);							
						}
					});
				}
			}]
		}];
		
		this.callParent(arguments);
	}
});