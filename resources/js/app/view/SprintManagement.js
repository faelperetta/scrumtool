Ext.define('ScrumTool.view.SprintManagement', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.sprintmanagement',
	title: 'Gerenciamento de Sprints',
	bodyStyle: 'background: #FFF',
	
	initComponent: function() {
		var me = this;
		
		me.layout = 'border';
		
		me.defaults = {
			split: true
		};

		me.items = [{
			xtype: 'sprintgrid',
			region: 'west',
			collapsible: true
		},{
			xtype: 'container',
			region: 'center',	
			flex: 1,
			items: [{
				xtype: 'sprintdetail'
			}, {
				xtype: 'sprintbackloglist'
			}]
		}];
		
		me.callParent(arguments);
		
	}
	
});