Ext.define('ScrumTool.controller.Dashboard', {
	extend: 'Ext.app.Controller',
	
	init: function() {
		this.control({
			'dashboard': {
				render: function(comp) {
					var projects = this.application.currentUser.projects;
					console.log(projects[0]);
					comp.setActive(projects[0]);
				}
			}
		});
	},
});