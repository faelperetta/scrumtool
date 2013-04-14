Ext.define('ScrumTool.view.EditStory', {
	extend: 'Ext.window.Window',
	alias: 'widget.editstory',

	initComponent: function() {
		var me = this;
		
		me.modal = true;
		
		me.title = 'Nova Estória';
		
		me.width = 700;
		me.height = 600;
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
			}, {
				xtype: 'label',
				text: 'Descrição:',
				style: 'margin-top: 5px !important'
			},{
				xtype: 'htmleditor',
				name: 'description'
			},{
				xtype: 'label',
				text: 'Teste de Aceitação:',
				style: 'margin-top: 5px !important'
			},{
				xtype: 'htmleditor',
				name: 'teste'
			}, {
				xtype: 'combobox',
				fieldLabel: 'Categoria',
				name: 'category',
				displayField: 'name',
				valueField: 'id',
				hiddenName: 'id',
				store: 'Categories',
				queryMode: 'local'
			}, {
				xtype: 'container',
				layout: 'hbox',
				defaults: {
					padding:5
				},
				items: [{
					xtype: 'label',
					text: 'Prioridade:',
					style: 'margin-top: 3px'
				}, {
					xtype: 'radio',
					boxLabel: 'ALTA',
					name: 'priority',
					inputValue: 0
				}, {
					xtype: 'radio',
					boxLabel: 'MÉDIA',
					name: 'priority',
					inputValue: 1
				}, {
					xtype: 'radio',
					boxLabel: 'BAIXA',
					name: 'priority',
					inputValue: 2
				}]
					
			}, {
				xtype: 'container',
				layout: 'hbox',
				defaults: {
					padding:5
				},
				
				items: [{
					xtype: 'label',
					text: 'Pontos:',
					style: 'margin-top: 3px'
				}, {
					xtype: 'radio',
					boxLabel: '1',
					name: 'point',
					inputValue: 1
				}, {
					xtype: 'radio',
					boxLabel: '2',
					name: 'point',
					inputValue: 2
				}, {
					xtype: 'radio',
					boxLabel: '3',
					name: 'point',
					inputValue: 3
				}, {
					xtype: 'radio',
					boxLabel: '5',
					name: 'point',
					inputValue: 5
				}, {
					xtype: 'radio',
					boxLabel: '8',
					name: 'point',
					inputValue: 8
				}, {
					xtype: 'radio',
					boxLabel: '13',
					name: 'point',
					inputValue: 13
				}, {
					xtype: 'radio',
					boxLabel: '20',
					name: 'point',
					inputValue: 20
				}, {
					xtype: 'radio',
					boxLabel: '40',
					name: 'point',
					inputValue: 40
				}, {
					xtype: 'radio',
					boxLabel: '100',
					name: 'point',
					inputValue: 100
				}]
			}/*, {
				xtype: 'fieldset',
				title: 'Anexos',
				items: [{
					xtype: 'textfield',
					fieldLabel: 'Descrição',
		            name: 'field2',
				}, {
					xtype: 'filefield',
					fieldLabel: 'Arquivo',
					buttonText: 'Selecione'
				}]
			}*/]
		
		};
		
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
