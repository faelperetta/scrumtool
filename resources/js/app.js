Ext.Loader.setConfig({enabled:true});


Ext.application({
	
	name: 'ScrumTool',
    appFolder: 'resources/js/app',
    requires: ['ScrumTool.view.Viewport', 'ScrumTool.view.Login'],

    
    models: ['Menu'],
    stores: ['Menus', 'ChartData'],
    controllers: ['Login', 'Story', 'Sprint', 'Menu', 'Task', 'Project', 'User', 'Dashboard'],
    
    launch: function() {
    	var me = this;
    	
    	Ext.Ajax.request({
			url: 'users/isLogged',
			success: function(response) {
				if (response.responseText == "") {
					Ext.widget('login').show();					
				} else {
					var data = Ext.decode(response.responseText);
					me.currentUser = data;
					Ext.widget('scrumtool');					
				}
			}
		});
    }
});