Ext.define('ScrumTool.controller.Sprint', {
	extend: 'Ext.app.Controller',
	
	stores: ['Sprints', 'Tasks', 'ChartData'],
	
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
			
			'sprintbackloglist > toolbar > button[action=showBurndown]': {
				click: this.onShowBurndown
			},
			
			'sprintgrid > toolbar > button[action=newSprint]': {
				click: this.onNewSprint,
				render: function(me) {
					if (this.application.currentUser.role == 'Time') {
						me.setVisible(false);
					}
				}
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
		
		this.getChartDataStore().proxy.extraParams = {sprintId: record.data.id};
		
		this.getTasksStore().proxy.extraParams = {sprintId: record.data.id};
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
		this.getSprintsStore().sync();
	},
	
	onShowBurndown: function() {
		var me = this;
		me.getChartDataStore().load(function() {
			me.generateChart();
		});
	},
	
	generateChart: function() {
		var chart = Ext.create('Ext.chart.Chart', {
            style: 'background:#fff',
            animate: true,
            store: 'ChartData',
            shadow: true,
            theme: 'Category1',
            legend: {
                position: 'right'
            },
            axes: [{
                type: 'Numeric',
                minimum: 0,
                position: 'left',
                fields: ['planned', 'done', 'data3'],
                title: 'Horas',
                minorTickSteps: 1,
                grid: {
                    odd: {
                        opacity: 1,
                        fill: '#ddd',
                        stroke: '#bbb',
                        'stroke-width': 0.5
                    }
                }
            }, {
                type: 'Category',
                position: 'bottom',
                fields: ['name'],
                title: 'Dias da Sprint'
            }],
            series: [{
                type: 'line',
                title: 'Planejado',
                highlight: {
                    size: 7,
                    radius: 7
                },
                axis: 'left',
                xField: 'name',
                yField: 'planned',
                markerConfig: {
                    type: 'cross',
                    size: 4,
                    radius: 4,
                    'stroke-width': 0
                },
                tips: {
              	  width: 50,
              	  height: 28,
              	  renderer: function(storeItem, item) {
              	    this.setTitle(Math.floor(storeItem.get('planned')));
              	  }
              	},
            }, {
                type: 'line',
                title: 'Realizado',
                highlight: {
                    size: 7,
                    radius: 7
                },
                axis: 'left',
                smooth: true,
                xField: 'name',
                yField: 'done',
                markerConfig: {
                    type: 'circle',
                    size: 4,
                    radius: 4,
                    'stroke-width': 0
                },
                tips: {
                	  width: 50,
                	  height: 28,
                	  renderer: function(storeItem, item) {
                	    this.setTitle(Math.floor(storeItem.get('done')));
                	  }
                	},
            }]
        });
	 
	 Ext.create('Ext.window.Window', {
		    title: 'Burndown',
		    maximizable:true,
		    height: 400,
		    width: 600,
		    layout: 'fit',
		    modal: true,
		    items: chart
		}).show();
	}
	
	
});