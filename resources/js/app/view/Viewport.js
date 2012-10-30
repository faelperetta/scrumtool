Ext.define('ScrumTool.view.Viewport', {
	extend: 'Ext.container.Viewport',
	alias: 'widget.scrumtool',
	
	requires: [
	    'ScrumTool.view.MenuList',
	    'ScrumTool.view.StoryGrid',
	    'ScrumTool.view.EditStory',
	    'ScrumTool.view.SprintManagement',
	    'ScrumTool.view.SprintGrid',
	    'ScrumTool.view.SprintDetail',
	    'ScrumTool.view.SprintBacklogList',
	    'ScrumTool.view.EditTask',
	    'ScrumTool.view.ProjectGrid',
	    'ScrumTool.view.EditProject'
	],
	
	layout: 'fit',
	
	initComponent: function() {
		this.items = {
			xtype: 'panel',
			
			layout: {
				type: 'hbox',
				align: 'stretch'
			},
			
			dockedItems: [{
				dock: 'top',
				xtype: 'toolbar',
				height: 80,
				items: [{
					html: 'ScrumTool'
				}, {
					html: 'empty',
					flex: 1
				}, {
					id: 'search',
                    name: 'search',
                    emptyText: 'enter search term',
                    xtype: 'trigger',
                    triggerCls: 'x-form-search-trigger'
				}]
				
				
			}],
			
			items: [{
				width: 200,
				xtype: 'panel',
				border: false,
				layout: {
					type: 'vbox',
					align: 'stretch'
				},
				
				items: [{
					xtype:'menulist',
					flex: 1
				}]
			}, {
				xtype: 'tabpanel',
				id: 'tabContainer',
				flex: 1
			}]
		};
		
		
		this.callParent(arguments);
	}
	
});