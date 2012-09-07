Ext.define('ScrumTool.view.Login', {
	extend: 'Ext.window.Window',
	alias: 'widget.login',
	
	width: 300,
	height: 200,
	title: 'Scrum Tool - Login',
	closable: false,
	closeAction: 'destroy',
	bodyStyle: 'background:#fff',
	
	initComponent: function() {
		
		var me = this;
		
		me.items = [{
			xtype: 'form',
			id: 'formLogin',
			bodyPadding: 10,
			border: false,
			height: '100%',
			
			defaults: {
		        anchor: '100%',
		        style:'font-weight: bold',
		    },
			items: [{
				xtype: 'textfield',
				name: 'username',
				fieldLabel: 'Usuário',
				labelAlign: 'top',
				allowBlank: false
			}, {
				xtype: 'textfield',
				name: 'password',
				fieldLabel: 'Senha',
				labelAlign: 'top',
				inputType: 'password',
				allowBlank: false
			}]
		}];
		
		me.buttons = [{
			text: 'Entrar',
			action: 'login',
		}, {
			text: 'Esqueci minha senha'
		}];
		
		me.callParent(arguments);
	}
});