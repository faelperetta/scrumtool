Ext.define('ScrumTool.view.MenuList', {
	extend: 'Ext.grid.Panel',
	
	alias: 'widget.menulist',
	store: 'Menus',
	
	hideHeaders: true,
	
	initComponent: function() {
		this.columns = [{
			dataIndex: 'name',
			flex: 1,
			text: 'Item'
		}];
		
		this.callParent(arguments);
	}
	
});