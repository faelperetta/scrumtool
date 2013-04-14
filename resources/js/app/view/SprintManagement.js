Ext.define('ScrumTool.view.SprintManagement', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.sprintmanagement',
	title: 'Gerenciamento de Sprints',
	bodyStyle: 'background: #FFF',
	closable: true,
	
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
			layout: 'border',
			style: 'background: #FFF !important',
			items: [{
				xtype: 'sprintdetail',
				region: 'north'
			}, {
				xtype: 'sprintbackloglist',
				region: 'center'
			}]
		}];
		
		me.callParent(arguments);
		
	}
	
});