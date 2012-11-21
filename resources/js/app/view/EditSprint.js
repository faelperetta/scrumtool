Ext.define('ScrumTool.view.EditSprint', {
	extend: 'Ext.window.Window',
	alias: 'widget.editsprint',

	initComponent: function() {
		var me = this;
		
		me.modal = true;
		
		me.title = 'Nova Sprint';
		
		me.width = 780;
		me.height = 500;
		me.layout = 'border',
		
		me.items = [{
			region: 'north',
			xtype: 'form',
			autoScroll: true,
			bodyPadding: 5,
			layout: 'hbox',
			border: false,
			plain: true,
			height:60,
			
			fieldDefaults: {
	            labelWidth: 55,
	            anchor: '100%',
	            labelAlign: 'top',
	            labelStyle: 'font-weight: bold',
	            style: 'margin-right: 5px'
	        },
			
			items: [{
				xtype: 'textfield',
				fieldLabel: 'Titulo',
				name: 'name',
				width: 300
			}, {
				xtype:'datefield',
				fieldLabel: 'Data Inicio',
				name: 'startDate',
				format: 'd/m/Y',
				flex: 1
			}, {
				xtype: 'datefield',
				fieldLabel: 'Data Fim',
				name: 'endDate',
				format: 'd/m/Y',
				flex: 1
			}]
		
		}, {
			region: 'center',
			xtype: 'container',
			style: 'background: #FFF',
			layout:{
				type: 'hbox',
				align: 'stretch',
			},
			flex: 1,
			defaults: {
				padding:10
			},
			items: [{
				xtype: 'grid',
				title: 'Product Backlog',
				flex:1,
				store: Ext.create('ScrumTool.store.Stories', true),
				//store: 'Stories',
				id: 'backlogGrid',
				
				viewConfig: {
					plugins: {
		                ptype: 'gridviewdragdrop',
		                dragGroup: 'firstGridDDGroup',
		                dropGroup: 'secondGridDDGroup'
		            },
		            listeners: {
		                drop: function(node, data, dropRec, dropPosition) {
		                    var dropOn = dropRec ? ' ' + dropPosition + ' ' + dropRec.get('name') : ' on empty view';
		                    console.log("Drag from right to left", 'Dropped ' + data.records[0].get('name') + dropOn);
		                }
		            }
				},
				
				columns: [{
					text: 'Titulo',
					dataIndex: 'name',
					flex:1
				},{
					text: 'Pontos',
					dataIndex: 'point'
				}]
			}, {
				xtype: 'grid',
				title: 'Sprint Backlog',
				id: 'sprintBacklogGrid',
				flex:1,
				store: Ext.create('ScrumTool.store.Stories'),
				viewConfig: {
		            plugins: {
		                ptype: 'gridviewdragdrop',
		                dragGroup: 'secondGridDDGroup',
		                dropGroup: 'firstGridDDGroup'
		            },
		            listeners: {
		                drop: function(node, data, dropRec, dropPosition) {
		                    var dropOn = dropRec ? ' ' + dropPosition + ' ' + dropRec.get('name') : ' on empty view';
		                    console.log("Drag from left to right", 'Dropped ' + data.records[0].get('name') + dropOn);
		                }
		            }
		        },
				columns: [{
					text: 'Titulo',
					dataIndex: 'name',
					flex:1
				}, {
					text: 'Pontos',
					dataIndex: 'point'
				}]
			}]
		}];
		
		me.buttons = [{
			text: 'Salvar',
			action: 'save'
		}, {
			text: 'Cancelar',
			scope: this,
			handler: function() {
				this.close();
			}
		}];
		
		me.callParent(arguments);
	}
});
