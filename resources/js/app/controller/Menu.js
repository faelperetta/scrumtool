var tab = '';
Ext.define('ScrumTool.controller.Menu', {
	extend: 'Ext.app.Controller',
	
	views: ['MenuList'],
	
	refs: [{
		ref: 'tabContainer', selector: 'tabpanel[id=tabContainer]'
	}],
	
	init: function() {
		
		this.control({
			'menulist': {
				itemclick: this.onMenuItemClick 
			}
		});
	},
	
	onMenuItemClick: function(comp, record, item, index) {
		var newTab = record.get('type');
		
		if (newTab == '') return;
				
		if (!this.getTabContainer().child(newTab)) {
            this.getTabContainer().add({
                xtype:newTab
            });
            this.getTabContainer().setActiveTab(this.getTabContainer().child(newTab));
        } else {
            this.getTabContainer().setActiveTab(this.getTabContainer().child(newTab));
        }
	}
});