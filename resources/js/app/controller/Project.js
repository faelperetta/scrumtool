Ext.define('ScrumTool.controller.Project', {
	extend: 'Ext.app.Controller',
	
	stores: ['Projects'],
	
	init: function() {
		this.control({
			'projectgrid': {
				editproject: this.onEditProject,
				removeproject: this.onRemoveProject
			},
			
			'projectgrid > toolbar > button[action=newProject]': {
				click: this.onNewProject
			},
			
			'editproject > toolbar > button[action=save]': {
				click: this.onSaveProject
			},
		});
	},
	
	onNewProject: function() {
		var projectWindow = Ext.widget('editproject', {title: 'Novo Projeto'});
		projectWindow.show();
	},
	
	onSaveProject: function(button) {
		var window = button.up('window'),
        form   = window.down('form'),
        record = form.getRecord(),
        values = form.getValues();
	
        if (record == null) {
        	record = Ext.create('ScrumTool.model.Project');
        	record.set(values);
        	this.getProjectsStore().add(record.data);        	
        }  else {        	
        	record.set(values);
        }
        
        this.getProjectsStore().sync();
       		
		window.close();
	},
	
	onEditProject: function(grid, rowIndex, colIndex) {
		var projectWindow = Ext.widget('editproject', {title: 'Editar Projeto'});
		projectWindow.show();
		var record = grid.getStore().getAt(rowIndex);
		projectWindow.down('form').loadRecord(record);
	},
	
	onRemoveProject: function(grid, rowIndex, colIndex) {
		console.log(rowIndex);
		grid.getStore().removeAt(rowIndex);
	}
});