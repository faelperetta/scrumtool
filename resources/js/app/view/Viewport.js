Ext.define('ScrumTool.view.Viewport', {
	extend: 'Ext.container.Viewport',
	alias: 'widget.scrumtool',
	
	requires: [
	    'ScrumTool.view.MenuList',
	    'ScrumTool.view.StoryGrid',
	    'ScrumTool.view.EditStory'
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
				flex: 1,
				items: [{
					xtype: 'storygrid'
				}]
			}]
		};
		
		
		this.callParent(arguments);
	}
	
});