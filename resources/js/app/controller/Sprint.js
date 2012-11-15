Ext.define('ScrumTool.controller.Sprint', {
	extend: 'Ext.app.Controller',
	
	stores: ['Sprints', 'Tasks'],
	
	views: ['EditSprint'],
	
	refs: [{
		ref: 'sprintDetail', selector: 'sprintdetail'
	}, {
		ref: 'sprintBacklogGrid', selector: 'grid[id=sprintBacklogGrid]'
	}, {
		ref: 'backlogGrid', selector: 'grid[id=backlogGrid]' 
	}, {
		ref: 'sprintGrid', selector: 'sprintgrid'
	}],
	
	init: function() {
		
		this.control({
			'sprintgrid': {
				afterrender: this.onAfterRenderSprintGrid,
				editsprint: this.onEditSprint,
				select: this.onSelectGritItem,
				removesprint: this.onRemoveSprint
			},
			
			'sprintgrid > toolbar > button[action=newSprint]': {
				click: this.onNewSprint
			},
			
			'editsprint': {
				render: this.onRenderEditSprint
			},
			
			'editsprint > toolbar > button[action=save]': {
				click: this.onSaveSprint
			}
			
			
		});
		
	},
	
	onAfterRenderSprintGrid: function() {
		var me = this;
		this.getSprintsStore().load(function(records) {
			if (records.length > 0) {
				me.getSprintGrid().getSelectionModel().select(0);				
			}
		});
	},
	
	onRenderEditSprint: function() {
		this.getBacklogGrid().getStore().loadAvailableStories();
		
	},
	
	onNewSprint: function() {
		var storyWindow = Ext.widget('editsprint', {title: 'Nova História'});
		storyWindow.show();
	},
	
	onSaveSprint: function(button) {
		var window = button.up('window'),
        form   = window.down('form'),
        record = form.getRecord(),
        values = form.getValues();
	
        if (record == null) {
        	record = Ext.create('ScrumTool.model.Sprint');
        	values.stories = this.getExtractStories(this.getSprintBacklogGrid().getStore().getRange());
        	record.set(values);
        	this.getSprintsStore().add(record);        	
        }  else {        	
        	values.stories = this.getExtractStories(this.getSprintBacklogGrid().getStore().getRange());
        	record.set(values);
        }
        
		this.getSprintsStore().sync();
		
		window.close();
	},
	
	getExtractStories: function(records) {
		stories = [];
		for(var i = 0; i < records.length; i++) {
			stories.push(records[i].data);
		}
		return stories;
	},
	
	onEditSprint: function(grid, rowIndex, colIndex) {
		var sprintWindow = Ext.widget('editsprint', {title: 'Editar Sprint'});
		sprintWindow.show();
		var record = grid.getStore().getAt(rowIndex);
		sprintWindow.down('form').loadRecord(record);
		
		stories = record.data.stories;
		
		if (stories != null) {
			for (var i = 0; i < stories.length; i++) {
				this.getSprintBacklogGrid().getStore().add(stories[i]);
			}			
		}
	},
	
	onSelectGritItem: function(rowModel, record, index) {
		this.getSprintDetail().setActive(record);
		this.getTasksStore().proxy.extraParams = {storyId: record.data.id};
		this.getTasksStore().load();
	},
	
	/**
	 * TODO verificar se metodo ainda sera necessario apos a implementacao da logico lado servidor.
	 * @param stories
	 */
	fillStoreGrid: function(stories) {
		if (stories != null) {
			for(var i = 0; i < stories.length; i++) {
				this.getTasksStore().add({storyName: stories[i].name, description: null});
			}
		}
	},
	
	onRemoveSprint: function(grid, rowIndex, colIndex) {
		this.getSprintsStore().removeAt(rowIndex);
	}
	
	
});