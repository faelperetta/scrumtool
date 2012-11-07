Ext.define('ScrumTool.controller.User', {
	extend: 'Ext.app.Controller',
	
	stores: ['Users'],
	
	init: function() {
		this.control({
			'usergrid': {
				edituser: this.onEditUser,
				removeuser: this.onRemoveUser,
				beforerender: this.onBeforeRenderGrid
			},
			
			'usergrid > toolbar > button[action=newUser]': {
				click: this.onNewUser
			},
			
			'edituser > toolbar > button[action=save]': {
				click: this.onSaveUser
			},
		});
	},
	
	onNewUser: function() {
		var userWindow = Ext.widget('edituser', {title: 'Novo Usuário'});
		userWindow.show();
	},
	
	onBeforeRenderGrid: function() {
		this.getUsersStore().load();
	},
	
	onSaveUser: function(button) {
		var window = button.up('window'),
        form   = window.down('form'),
        record = form.getRecord(),
        values = form.getValues();

        if (record == null) {
        	record = Ext.create('ScrumTool.model.User');
        	record.set(values);
        	this.getUsersStore().add(record.data);        	
        }  else {        	
        	record.set(values);
        }
        
        this.getUsersStore().sync();
       		
		window.close();
	},
	
	onEditUser: function(grid, rowIndex, colIndex) {
		var userWindow = Ext.widget('edituser', {title: 'Editar Usuário'});
		userWindow.show();
		var record = grid.getStore().getAt(rowIndex);
		userWindow.down('form').loadRecord(record);
	},
	
	onRemoveUser: function(grid, rowIndex, colIndex) {
		grid.getStore().removeAt(rowIndex);
	}
});