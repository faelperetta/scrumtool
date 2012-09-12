Ext.define('ScrumTool.view.EditSprint', {
	extend: 'Ext.window.Window',
	alias: 'widget.editsprint',

	initComponent: function() {
		var me = this;
		
		me.modal = true;
		
		me.title = 'New Sprint';
		
		me.width = 500;
		me.height = 500;
		me.layout = 'fit',
		
		me.items = {
			xtype: 'form',
			autoScroll: true,
			bodyPadding: 5,
			layout: 'anchor',
			border: false,
			plain: true,
			
			fieldDefaults: {
	            labelWidth: 55,
	            anchor: '100%',
	            labelAlign: 'top'
	        },
			
			items: [{
				xtype: 'textfield',
				fieldLabel: 'Titulo',
				name: 'name'
			}]
		
		};
		
		me.buttons = [{
			text: 'Save',
			action: 'save'
		}, {
			text: 'Cancel',
			scope: this,
			handler: function() {
				this.close();
			}
		}];
		
		me.callParent(arguments);
	}
});
