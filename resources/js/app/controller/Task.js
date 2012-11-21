Ext.define('ScrumTool.controller.Task', {
	extend: 'Ext.app.Controller',
	
	stores: ['Tasks', 'ProjectUsers'],
	
	refs: [{
		ref: 'cboStory', 
		selector: 'combobox[id=cboTaskStory]'
	}, {
		ref: 'cboAssignedTo',
		selector: 'combobox[id=cboAssignedTo]'
	},{
		ref: 'sprintGrid',
		selector: 'sprintgrid'
	}],
	
	init: function() {
		this.control({
			'sprintbackloglist > toolbar > button[action=newTask]': {
				click: this.onNewTask
			},
			
			'sprintbackloglist': {
				itemdblclick: this.onSelectTask
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
		values.story = this.getCboStory().lastSelection[0].data;
		values.user = this.getCboAssignedTo().lastSelection[0].data;
		
        if (record == null) {
        	record = Ext.create('ScrumTool.model.Task');
        	record.set(values);
        	this.getTasksStore().add(record);        	
        }  else {        	
        	record.set(values);
        }
       		
        this.getTasksStore().sync();
		window.close();
	},
	
	onRenderStoryCombo: function(combo) {
		selectedSprint = this.getSprintGrid().getSelectionModel().getSelection()[0],		
		stories = selectedSprint.data.stories;
		
		this.fillStoryCombo(stories);
	},
	
	onSelectTask: function(grid, record, item) {
		var taskWindow = Ext.widget('edittask', {title: 'Editar Tarefa'});
		taskWindow.down('form').loadRecord(record);
		taskWindow.show();
		this.getCboStory().setValue(record.data.story.id);
		this.getCboAssignedTo().setValue(record.data.user.id);
		
	},

	/**
	 * Preenche o combo de stories.
	 * @param stories
	 * @param store
	 */
	fillStoryCombo: function(stories) {
		var store = this.getCboStory().getStore(),
		record = null;

		store.removeAll();
		
		if (stories != null) {
			for (var i = 0; i < stories.length; i++) {
				record = Ext.create('ScrumTool.model.Story');
				record.set(stories[i]);
				store.add(record);
			}
		}		
	}
});