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
				name: 'storyName',
				valueField: 'name',
				displayField: 'name',
				story: Ext.create('ScrumTool.store.Stories'),
				queryMode: 'local',
				id: 'cboTaskStory'
			},{
				xtype: 'textfield',
				fieldLabel: 'Descrição',
				name: 'description'
			}, {
				xtype: 'textfield',
				fieldLabel: 'Horas',
				name: 'hours'
			}]
		}];
		
		me.buttons = [{
			text: 'Save',
			action: 'save'
		}, {
			text: 'Cancel',
			scope: this,
			handler: function() {
				this.close();
			}
		}];
		
		me.callParent(arguments);
	}
});