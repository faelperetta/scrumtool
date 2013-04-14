Ext.define('ScrumTool.view.UserGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.usergrid',
	store: 'Users',
	title: 'Usuários',
	id: 'userGrid',
	border: false,
	closable: true,
	
	initComponent: function() {
		var me = this;
		
		me.tbar = {
            items: [{
                text: 'Novo Usuário',
                action: 'newUser',
                scope: this
            }]
		};
		
		me.columns = [{
			text: 'Nome',
			dataIndex: 'name',
			width: 200
		}, {
			text: 'Email',
			dataIndex: 'email',
			flex: 1
		}, {
			xtype: 'actioncolumn',
			width: 45,
			items: [{
				icon: 'resources/images/edit.png',
				tooltip: 'Editar',
				handler: function(grid, rowIndex, colIndex) {
					Ext.getCmp('userGrid').fireEvent('edituser', grid, rowIndex, colIndex);
				}
			},{
				icon: 'resources/images/delete.png',
				tooltip: 'Excluir',
				handler: function(grid, rowIndex, colIndex) {
					Ext.MessageBox.confirm('Confirmar', 'Tem certeza que deseja excluir este usuário?', function(btn) {
						if (btn == 'yes') {
							Ext.getCmp('userGrid').fireEvent('removeuser', grid, rowIndex, colIndex);							
						}
					});
				}
			}]
		}];
		
		me.callParent(arguments);
		
	}
});