Ext.define("MyApp.view.Musica", {
	extend: "Ext.Container",
	cls:'panelBackground',
    requires:
    [
        'Ext.navigation.Bar',
        'MyApp.view.Contacts',
    ],

    config: {
        
        layout: 'vbox',
        
        items: 
        [
        	{
	            xtype: "titlebar",
	            id:"mainNavigationBar",
	            docked: "top",
	            title: "M&uacute;sica",
	            items: 
	            [
	            {
	                xtype: "button",
	                id:'back',
	                align: 'left',
	                text: "Regresar",
	                ui: "action",
	            }
	            ]
	        },
        	{
	        	xtype: 'carousel',
        		cls:'centeredO',
		        defaults: {
			        styleHtmlContent: true
			    },
			    direction: 'horizontal',
			    items: [
			        {
			            html : '<img src="http://www.cloud-coach.net/wp-content/uploads/2011/11/Spotify_Icon_set_by_91maan90-300x300.png" height="150px" class="displayed"/>',
			        },
			        {
			            html : '<img src="http://www.cloud-coach.net/wp-content/uploads/2011/11/Spotify_Icon_set_by_91maan90-300x300.png" height="150px" class="displayed"/>',
			        },
			        {
			            html : '<img src="http://www.cloud-coach.net/wp-content/uploads/2011/11/Spotify_Icon_set_by_91maan90-300x300.png" height="150px" class="displayed"/>',
			        },
			    ],
			    flex:1,
        	},
        	{
	        	xtype:'panel',
	        	layout:'fit',
	        	
	        	items:{
		        	xtype:'contacts',
	        	},
	        	flex:2,
        	}
        	
        ]
    }
});