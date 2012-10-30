Ext.define('ScrumTool.view.ProjectGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.projectgrid',
	store: 'Projects',
	title: 'Projetos',
	id: 'projectGrid',
	border: false,
	
	initComponent: function() {
		var me = this;
		
		me.tbar = {
            items: [{
                text: 'Novo Projeto',
                action: 'newProject',
                scope: this
            }]
		};
		
		me.columns = [{
			text: 'Projeto',
			dataIndex: 'name'
		}, {
			text: 'Descrição',
			dataIndex: 'description',
			flex: 1
		}, {
			xtype: 'actioncolumn',
			width: 45,
			items: [{
				icon: 'resources/images/edit.png',
				tooltip: 'Editar',
				handler: function(grid, rowIndex, colIndex) {
					Ext.getCmp('projectGrid').fireEvent('editproject', grid, rowIndex, colIndex);
				}
			},{
				icon: 'resources/images/delete.png',
				tooltip: 'Excluir',
				handler: function(grid, rowIndex, colIndex) {
					Ext.getCmp('projectGrid').fireEvent('removeproject', grid, rowIndex, colIndex);
				}
			}]
		}];
		
		me.callParent(arguments);
		
	}
});