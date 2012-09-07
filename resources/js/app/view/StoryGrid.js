Ext.Loader.setPath('Ext.ux', 'resources/ext-4/src/ux');
Ext.require([
            'Ext.ux.PreviewPlugin'
        ]);

Ext.define('ScrumTool.view.StoryGrid', {
	extend: 'Ext.grid.Panel',
	alias: 'widget.storygrid',
	
	store: 'Stories',
	
	title: 'Product Backlog',
	border: false,
	
	initComponent: function() {
		var me = this;
		
		me.cls = 'story-grid',
		
		me.viewConfig = {
            itemId: 'view',
            plugins: [{
                pluginId: 'preview',
                ptype: 'preview',
                bodyField: 'description',
                expanded: true
            }],
            listeners: {
                scope: this,
            }
        },
		
		me.tbar = {
	            items: [{
	                text: 'Nova História',
	                action: 'newStory',
	                scope: this
	            }]
		};
		
		
		me.columns = [{
			text: 'Titulo',
			dataIndex: 'name',
			flex: 1,
			renderer: function(value, p, record) {
				 return Ext.String.format('<div class="topic"><b>{0}</b><span class="author">{1}</span></div>', value, record.get('user').name || "Unknown");
			}
		    
		}, {
			text: 'Autor',
			dataIndex: 'author',
			hidden: true,
			width: 200,
		}, {
			text: 'Data',
			dataIndex: 'createdAt',
			width: 200
		}, {
			xtype: 'actioncolumn',
			width: 50,
			items: [{
				icon: 'resources/images/post.gif',
				tooltip: 'Editar'
			}]
		}];
		
		this.callParent(arguments);
	}
});