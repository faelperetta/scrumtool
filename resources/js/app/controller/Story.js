Ext.define('ScrumTool.controller.Story', {
	extend: 'Ext.app.Controller',
	
	stores: ['Stories', 'Categories'],
		
	refs: [{
		ref: 'storyGrid', selector: 'storygrid'
	}],
	
	init: function() {
		this.control({
			'storygrid': {
				afterrender: this.onAfterRenderStoryGrid,
				editstory: this.onEditStory,
				removestory: this.onRemoveStory
			},
			
			'storygrid > toolbar > button[action=newStory]': {
				click: this.onNewStory
			},
			
			'editstory > toolbar > button[action=save]': {
				click: this.onSaveStory
			}
		});
	},
	
	/**
	 * Metodo que carrega as historias depois que o grid for renderizado.
	 */
	onAfterRenderStoryGrid: function() {
		this.getStoriesStore().load();
	},
	
	/**
	 * Metodo que abre a window com o formulario para cadastro de uma historia.
	 */
	onNewStory: function() {
		var storyWindow = Ext.widget('editstory', {title: 'Nova História'});
		storyWindow.show();
	},
	
	/**
	 * Metodo que salva uma historia.
	 */
	onSaveStory: function(button) {
		var window    = button.up('window'),
        form   = window.down('form'),
        record = form.getRecord(),
        values = form.getValues();
	
        if (record == null) {
        	record = Ext.create('ScrumTool.model.Story');
        	record.set(values);
        	this.getStoriesStore().add(record);        	
        }  else {        	
        	record.set(values);
        }
        
		this.getStoriesStore().sync();
		
		window.close();
	},
	
	onEditStory: function(grid, rowIndex, colIndex) {
		var storyWindow = Ext.widget('editstory', {title: 'Editar História'});
		storyWindow.show();
		var record = grid.getStore().getAt(rowIndex);
		storyWindow.down('form').loadRecord(record);
	},
	
	onRemoveStory: function(grid, rowIndex, colIndex) {
		this.getStoriesStore().removeAt(rowIndex);
	}
});