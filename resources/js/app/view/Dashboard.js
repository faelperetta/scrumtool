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
					                '<div class="infoCount">{statistics.totalStories}</div>',
					            '</li>',
					            '<li>',
					                '<div class="infoTitle">Sprints em Andamento</div>',
					                '<div class="infoCount">{statistics.totalSprintsRunning}</div>',        
					            '</li>',
					            '<li>',
					                '<div class="infoTitle">Sprints Concluidas</div>',
					                '<div class="infoCount">{statistics.totalSprintsFinished}</div>',
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