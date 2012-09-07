Ext.define('ScrumTool.controller.Login', {
	extend: 'Ext.app.Controller',
	
	init: function() {
		this.control({
			
			'login > toolbar > button[action=login]': {
				click: this.onLogin
			}
			
		});
		
	},
	
	onLogin: function(button) {
		var me = this,
		form = button.up('window').down('form').getForm();
		
		if (form.isValid()) {
			form.submit({
				url: 'users/login',
				success: function(form, action) {
					me.application.currentUser = action.result.user;
					button.up('window').close();
					Ext.widget('scrumtool');
				},
				
				failure: function() {
					Ext.Msg.alert('Erro', 'Usuário ou Senha inválida.');
				}
			});
		}
	}
	
});