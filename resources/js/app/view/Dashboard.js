Ext.define('ScrumTool.view.Dashboard',  {
	extend: 'Ext.panel.Panel',
	alias: 'widget.dashboard',
	title: 'Dashboard',
	data: {name: 'ScrumTool'},
	
	initComponent: function() {
		Ext.apply(this, {
			tpl: Ext.create('Ext.XTemplate',
					'<div id="dashboardContainer">',
					    '<h1 class="projectTitle">{name}</h1>',
					    '<div id="projectInfo">',
					        '<ul class="projectInfoList">',
					            '<li>',
					                '<div class="infoTitle">Total de Estorias</div>',
					                '<div class="infoCount">10</div>',
					            '</li>',
					            '<li>',
					                '<div class="infoTitle">Estorias em Andamento</div>',
					                '<div class="infoCount">10</div>',        
					            '</li>',
					            '<li>',
					                '<div class="infoTitle">Estorias Concluidas</div>',
					                '<div class="infoCount">10</div>',
					            '</li>',
					        '</ul>',
					        '<br clear="both" />',
					    '</div>',
					   '</div>')
		});
		
		
		this.callParent(arguments);
	},
	
	setActive: function(data) {
		this.active = data;
		this.update(data);
	}
	
	
});