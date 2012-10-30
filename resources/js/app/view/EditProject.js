Ext.define('ScrumTool.view.EditProject', {
	extend: 'Ext.window.Window',
	title: 'Novo Projeto',
	alias: 'widget.editproject',
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
				xtype: 'textfield',
				fieldLabel: 'Nome',
				name: 'name'
			},{
				xtype: 'textareafield',
				fieldLabel: 'Descrição',
				name: 'description'
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