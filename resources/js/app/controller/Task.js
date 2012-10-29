Ext.define('ScrumTool.controller.Task', {
	extend: 'Ext.app.Controller',
	
	stores: ['Tasks'],
	
	refs: [{
		ref: 'cboStory', 
		selector: 'combobox[id=cboTaskStory]'
	}, {
		ref: 'sprintGrid',
		selector: 'sprintgrid'
	}],
	
	init: function() {
		this.control({
			'sprintbackloglist > toolbar > button[action=newTask]': {
				click: this.onNewTask
			},
			
			'combobox[id=cboTaskStory]': {
				render: this.onRenderStoryCombo
			},
			
			'edittask > toolbar > button[action=save]': {
				click: this.onSaveTask
			},
		});
	},
	
	onNewTask: function() {
		var taskWindow = Ext.widget('edittask', {title: 'Nova Tarefa'});
		taskWindow.show();
	},
	
	onSaveTask: function(button) {
		var window = button.up('window'),
        form   = window.down('form'),
        record = form.getRecord(),
        values = form.getValues();
	
        if (record == null) {
        	record = Ext.create('ScrumTool.model.Task');
        	record.set(values);
        	this.getTasksStore().add(record.data);        	
        }  else {        	
        	record.set(values);
        }
       		
		window.close();
	},
	
	onRenderStoryCombo: function(combo) {
		selectedSprint = this.getSprintGrid().getSelectionModel().getSelection()[0],		
		stories = selectedSprint.data.stories;
		
		this.fillStoryCombo(stories);
	},

	/**
	 * Preenche o combo de stories.
	 * @param stories
	 * @param store
	 */
	fillStoryCombo: function(stories) {
		var store = this.getCboStory().getStore(),
		record = null;
		
		if (stories != null && store.count() == 0) {
			for (var i = 0; i < stories.length; i++) {
				record = Ext.create('ScrumTool.model.Story');
				record.set(stories[i]);
				store.add(record);
			}
		}		
	}
	
});