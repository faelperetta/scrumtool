Ext.define('ScrumTool.controller.Dashboard', {
	extend: 'Ext.app.Controller',
	
	stores: ['Menus'],
	
	refs: [{
		ref: 'cboChangeProject', selector: 'combobox[id=changeProject]'
	}, {
		ref: 'menu', selector: 'menulist'
	}],
	
	init: function() {
		this.control({
			'dashboard': {
				render: function(comp) {
					var projects = this.application.currentUser.projects;
					this.getCboChangeProject().getStore().loadData(projects);
					comp.setActive(this.application.currentUser.currentProject);
					
					if (this.application.currentUser.role != 'Administrador') {
						this.getMenusStore().removeAt(3);
						this.getMenusStore().removeAt(0);
					}
					
				}
			},
			
			 'combobox[id=changeProject]': {
				 change: this.onChangeProject
			 }
		});
	},

	changeProject: function(projectId) {
		Ext.Ajax.request({
		    url: 'users/changeProject',
		    params: {
		        projectId: projectId
		    },
		    success: function(response){
		        var text = response.responseText;
		        if (text == 'ok') {
		        	window.location = 'home';
		        }
		    }
		});
	},
	
	onChangeProject: function(comp, newValue, oldValue) {
		this.changeProject(newValue);
	},
	
	
});