Ext.define('ScrumTool.view.EditTask', {
	extend: 'Ext.window.Window',
	title: 'Nova Tarefa',
	alias: 'widget.edittask',
	bodyStyle: 'background: #FFF',
	modal: true,
	width: 400,
	resizable: false,
	
	initComponent: function() {
		
		var me = this;
		
		me.items = [{
			xtype: 'form',
			padding: 5,
			layout: 'anchor',
			border: false,
			plain: true,
			
			fieldDefaults: {
	            anchor: '100%',
	            labelAlign: 'top'
	        },
	        
			items: [{
				xtype: 'combobox',
				fieldLabel: 'História',
				name: 'story',
				valueField: 'id',
				displayField: 'name',
				store: Ext.create('ScrumTool.store.Stories'),
				queryMode: 'local',
				id: 'cboTaskStory'
			},{
				xtype: 'textfield',
				fieldLabel: 'Descrição',
				name: 'description'
			},{
                xtype: 'fieldcontainer',
                layout: 'hbox',
                defaultType: 'textfield',

                fieldDefaults: {
                    labelAlign: 'top'
                },

                items: [{
    				xtype: 'numberfield',
    				fieldLabel: 'Horas',
    				name: 'hours',
    				width:50
    			},{
    				xtype: 'combobox',
    				fieldLabel: 'Responsável',
    				name: 'user',
    				valueField: 'id',
    				displayField: 'name',
    				store: 'ProjectUsers',
    				queryMode: 'local',
    				id: 'cboAssignedTo',
    				margins: '0 0 0 5'
    			},{
    				xtype: 'combobox',
    				fieldLabel: 'Status',
    				name: 'status',
    				valueField: 'name',
    				displayField: 'name',
    				store:  Ext.create('Ext.data.ArrayStore', {
    				    fields: ['name'],
    				    data:[['PARA FAZER'], ['FAZENDO'], ['EM TESTE'], ['PRONTO']]
    				}),
    				flex:1,
    				queryMode: 'local',
    				margins: '0 0 0 5'
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