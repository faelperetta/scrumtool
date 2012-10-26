Ext.define('ScrumTool.controller.Sprint', {
	extend: 'Ext.app.Controller',
	
	stores: ['Sprints'],
	
	views: ['EditSprint'],
	
	refs: [{
		ref: 'sprintDetail', selector: 'sprintdetail'
	}, {
		ref: 'sprintBacklogGrid', selector: 'grid[id=sprintBacklogGrid]'
	}],
	
	init: function() {
		
		this.control({
			'sprintgrid': {
				afterrender: this.onAfterRenderSprintGrid,
				editsprint: this.onEditSprint,
				select: this.onSelectGritItem
			},
			
			'sprintgrid > toolbar > button[action=newSprint]': {
				click: this.onNewSprint
			},
			
			'editsprint > toolbar > button[action=save]': {
				click: this.onSaveSprint
			},
			
			'grid[id=gridBacklogItemsToSel]': {
				render: function() {
					console.log('On Render Grid');
				}
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
		var window = button.up('window'),
        form   = window.down('form'),
        record = form.getRecord(),
        values = form.getValues();
	
        if (record == null) {
        	record = Ext.create('ScrumTool.model.Sprint');
        	values.stories = this.getExtractStories(this.getSprintBacklogGrid().getStore().getRange());
        	record.set(values);
        	console.log(record.data);
        	this.getSprintsStore().add(record);        	
        }  else {        	
        	record.set(values);
        	console.log(record.data);
        }
        
		//this.getSprintsStore().sync();
		
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
	},
	
	onSelectGritItem: function(rowModel, record, index) {
		this.getSprintDetail().setActive(record);
	}
	
	
});