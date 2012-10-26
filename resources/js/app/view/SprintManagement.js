Ext.define('ScrumTool.view.SprintManagement', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.sprintmanagement',
	title: 'Sprint',
	
	initComponent: function() {
		var me = this;
		
		me.layout = 'border';
		
		me.defaults = {
			flex: 1
		};

		me.items = [{
			xtype: 'sprintgrid',
			region: 'center'
		},{
			xtype: 'sprintdetail',
			region: 'east'
		}];
		
		me.callParent(arguments);
		
	}
	
});