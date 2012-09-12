Ext.define('ScrumTool.controller.Sprint', {
	extend: 'Ext.app.Controller',
	
	stores: ['Sprints'],
	views: ['EditSprint'],
	
	init: function() {
		
		this.control({
			'sprintgrid': {
				afterrender: this.onAfterRenderSprintGrid
			},
			
			'sprintgrid > toolbar > button[action=newSprint]': {
				click: this.onNewSprint
			},
			
			'editsprint > toolbar > button[action=save]': {
				click: this.onSaveSprint
			}
			
			
		});
		
	},
	
	onAfterRenderSprintGrid: function() {
		this.getSprintsStore().load();
	},
	
	onNewSprint: function() {
		var storyWindow = Ext.widget('editsprint', {title: 'Nova História'});
		storyWindow.show();
	},
	
	onSaveSprint: function(button) {
		console.log('teste');
		var window    = button.up('window'),
        form   = window.down('form'),
        record = form.getRecord(),
        values = form.getValues();
	
        if (record == null) {
        	record = Ext.create('ScrumTool.model.Sprint');
        	record.set(values);
        	this.getSprintsStore().add(record);        	
        }  else {        	
        	record.set(values);
        	console.log(record.data);
        }
        
		this.getSprintsStore().sync();
		
		window.close();
	}
	
	
});