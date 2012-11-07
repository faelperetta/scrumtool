Ext.define('ScrumTool.view.EditUser', {
	extend: 'Ext.window.Window',
	title: 'Novo User',
	alias: 'widget.edituser',
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
				xtype: 'textfield',
				fieldLabel: 'Email',
				name: 'email',
				vtype: 'email'
			}, {
				xtype: 'textfield',
				fieldLabel: 'Senha',
				name: 'password',
				inputType: 'password',
			}, {
				xtype: 'textfield',
				fieldLabel: 'Confirmar Senha',
				inputType: 'password'
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