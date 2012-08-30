Ext.define("MyApp.view.Noticias", {
	extend: "Ext.Container",

    requires:
    [
        'Ext.navigation.Bar',
        'MyApp.view.News',
    ],

    config: {
        
        layout: 'vbox',

        items: 
        [
        	{
	            xtype: "titlebar",
	            id:"mainNavigationBar",
	            docked: "top",
	            title: "Noticias",
	            items: 
	            [
	            {
	                xtype: "button",
	                id:'back',
	                align: 'left',
	                text: "Regresar",
	                ui: "back",
	            }
	            ]
	        },
        	{
	        	xtype:'news',
	            flex: 2
        	}
        ]
    }
});