Ext.Loader.setPath('Ext.ux', 'resources/ext-4/src/ux');
Ext.require([
            'Ext.ux.PreviewPlugin'
        ]);

Ext.define('ScrumTool.view.StoryGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.storygrid',
	
	store: 'Stories',
	id: 'storyGrid',
	closable: true,
	
	title: 'Product Backlog',
	border: false,
	
	initComponent: function() {
		var me = this;
		
		me.cls = 'story-grid',
		
		me.viewConfig = {
            itemId: 'view',
            plugins: [{
                pluginId: 'preview',
                ptype: 'preview',
                bodyField: 'description',
                expanded: true
            }],
            listeners: {
                scope: this,
            }
        },
		
		me.tbar = {
	            items: [{
	                text: 'Nova História',
	                action: 'newStory',
	                scope: this
	            }]
		};
		
		
		me.columns = [{
			text: 'Titulo',
			dataIndex: 'name',
			flex: 1,
			renderer: function(value, p, record) {
				 return Ext.String.format('<div class="topic"><b>{0}</b><span class="author">{1}</span></div>', value, record.get('user').name || "Unknown");
			}
		    
		}, {
			text: 'Autor',
			dataIndex: 'author',
			hidden: true,
			width: 200,
		}, {
			text: 'Data',
			dataIndex: 'createdAt',
			width: 200
		},{
			text: 'Criado por',
			dataIndex: 'user',
			width: 200,
			renderer: function(value) {
				return value.name;
			}
		}, {
			text: 'Prioridade',
			dataIndex: 'priority',
			renderer: function(value) {
				if (value == 0) {
					return "ALTA";
				} else if (value == 1) {
					return "MÉDIA";
				} else {
					return "BAIXA";
				}
			}
		}, {
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
					Ext.getCmp('storyGrid').fireEvent('editstory', grid, rowIndex, colIndex);
				}
			},{
				icon: 'resources/images/delete.png',
				tooltip: 'Excluir',
				handler: function(grid, rowIndex, colIndex) {
					if (APP.currentUser.role == 'Time') {
						Ext.MessageBox.alert("Aviso", "Você não tem permissão para excluir.");
						return;
					}
					
					Ext.MessageBox.confirm('Confirmar', 'Tem certeza que deseja excluir este item do backlog?', function(btn) {
						if (btn == 'yes') {
							Ext.getCmp('storyGrid').fireEvent('removestory', grid, rowIndex, colIndex);							
						}
					});
				}
			}]
		}];
		
		this.callParent(arguments);
	}
});