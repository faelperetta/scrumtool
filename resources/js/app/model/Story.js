Ext.define('ScrumTool.model.Story', {
	extend: 'Ext.data.Model',
	
	fields: ['id', 'name', 'description', 'status', 'point', 'createdAt', 'user',
	    {
			name: 'category',
			convert: function(v) {
				if (typeof v == "object") {
					return v.id;					
				} else {
					return v;
				}
			}
		}         
	]


});