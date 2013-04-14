Ext.define('ScrumTool.view.EditUser', {
	extend: 'Ext.window.Window',
	title: 'Novo User',
	alias: 'widget.edituser',
	bodyStyle: 'background: #FFF',
	modal: true,
	width: 400,
	resizable: false,
	
	initComponent: function() {
		
		var me = this;
		
		me.items = [{
			xtype: 'form',
			padding: 5,
			layout: 'anchor',
			border: false,
			plain: true,
			
			fieldDefaults: {
	            anchor: '100%',
	            labelAlign: 'top'
	        },
	        
			items: [{
				xtype: 'textfield',
				fieldLabel: 'Nome',
				name: 'name'
			},{
				xtype: 'textfield',
				fieldLabel: 'Email',
				name: 'email',
				vtype: 'email'
			}, {
				xtype: 'textfield',
				fieldLabel: 'Senha',
				name: 'password',
				inputType: 'password',
			}, {
				xtype: 'textfield',
				fieldLabel: 'Confirmar Senha',
				inputType: 'password'
			}, {
				xtype: 'combobox',
				fieldLabel: 'Perfil',
				name: 'role',
				valueField: 'name',
				displayField: 'name',
				store:  Ext.create('Ext.data.ArrayStore', {
				    fields: ['name'],
				    data:[['Administrador'], ['Product Owner'], ['Scrum Master'], ['Time']]
				}),
				flex:1,
				queryMode: 'local'
			}, {
				xtype: 'grid',
				store: 'Projects',
				title: 'Projetos',
				id: 'gridUserProjects',
				selModel:  Ext.create('Ext.selection.CheckboxModel'),
				columns: [{
					text: 'Projeto',
					dataIndex: 'name',
					flex: 1
				}]
			}]
		}];
		
		me.buttons = [{
			text: 'Salvar',
			action: 'save'
		}, {
			text: 'Cancelar',
			scope: this,
			handler: function() {
				this.close();
			}
		}];
		
		me.callParent(arguments);
	}
});