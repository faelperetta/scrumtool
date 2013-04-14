Ext.define('ScrumTool.view.SprintDetail', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.sprintdetail',
	data: {name: 'Sprint 1'},
	padding: 10,
	
	initComponent: function() {
		Ext.apply(this, {
			tpl: Ext.create('Ext.XTemplate',
					'<div id="sprintInfoContainer">',
			        '<div id="sprintHeader"><h1>{name} </h1><div class="sprintDateRange">De {startDate} até {endDate}</div><br clear="both" /></div>',
			        '<table class="sprintDetail">',
			            '<tr>',
			                '<td>Estórias</td>',
			                '<td class="value">{stories:this.storiesCount}</td>',               
			            '</tr>',
			            '<tr>',
			                '<td>Total de Pontos</td>',
			                '<td class="value">{stories:this.totalPoints}</td>', 
			            '</tr>',
			            '<tr>',
			                '<td>Pontos em Execução</td>',
			                '<td class="value">3</td>',
			            '</tr>',
			             '<tr>',
			                '<td>Pontos Completados</td>',
			                 '<td class="value">3</td>',
			            '</tr>',
			            /*'<tr>',
			                '<td>Dias Restantes</td>',
			                '<td class="value">10</td>',                        
			            '</tr>',  */                  
			        '</table>',
			    '</div>',
			    {
					storiesCount: function(stories) {
						//console.log(stories);
						return stories == null ? 0 :stories.length;
					},
					
					totalPoints: function(stories) {
						if ((stories != null) && (typeof stories == 'object')) {
							var totalPoints = 0;
							for (var i = 0; i < stories.length; i++) {
								totalPoints += stories[i].point;
							}
							return totalPoints;							
						} else {
							return 0;
						}						
					}
			    }
			)
		});
		
		this.callParent(arguments);
	},
	
	setActive: function(record) {
		this.active = record;
		this.update(record.data);
	}
	
});