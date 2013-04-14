Ext.define('ScrumTool.model.Task', {
	extend: 'Ext.data.Model',
	
	fields: [
	         {name: 'id'},
	         {name: 'description'},
	         {name: 'hours', type: 'int'},
	         {name: 'story'},
	         {name: 'user'},
	         {name: 'status'},
	         {name: 'user'},
	         {
	        	 name: 'storyName', 
	        	 persist: false, 
	        	 convert: function(v, record) {
	        		if (record.data.story) {
	        			return record.data.story.name;
	        		}
	        	 }
	         }
	]
});