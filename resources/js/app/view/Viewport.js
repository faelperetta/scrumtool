Ext.define('ScrumTool.view.Viewport', {
	extend: 'Ext.container.Viewport',
	alias: 'widget.scrumtool',
	
	requires: [
	    'ScrumTool.view.MenuList',
	    'ScrumTool.view.Dashboard',
	    'ScrumTool.view.StoryGrid',
	    'ScrumTool.view.EditStory',
	    'ScrumTool.view.SprintManagement',
	    'ScrumTool.view.SprintGrid',
	    'ScrumTool.view.SprintDetail',
	    'ScrumTool.view.SprintBacklogList',
	    'ScrumTool.view.EditTask',
	    'ScrumTool.view.ProjectGrid',
	    'ScrumTool.view.EditProject',
	    'ScrumTool.view.UserGrid',
	    'ScrumTool.view.EditUser'
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
					html: '<div style="font-size:26px">ScrumTool</div>'
				}, {
					html: '',
					flex: 1
				},{
					xtype: 'combobox',
					fieldLabel: 'Projeto',
					name: 'changeProject',
					id: 'changeProject',
					valueField: 'id',
					displayField: 'name',
					store: Ext.create('ScrumTool.store.Projects', {data: []}),
					queryMode: 'local'
				},{
					xtype:'container',
					html: '<a href="users/logout">Sair</a>'
				}/*, {
					id: 'search',
                    name: 'search',
                    emptyText: 'enter search term',
                    xtype: 'trigger',
                    triggerCls: 'x-form-search-trigger'
				}*/]
				
				
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
				flex: 1,
				items: [{
					xtype: 'dashboard'
				}]
			}]
		};
		
		
		this.callParent(arguments);
	}
	
});