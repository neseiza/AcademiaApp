Ext.define("MyApp.view.Karaoke", {
    extend: "Ext.Container",

    requires:
    [
        'Ext.navigation.Bar'
    ],

    config: {

        
        layout: 
        {
            type: 'card',
            animation: 
            {
                type: 'slide',
                direction: 'left',
                duration: 250
            }
        },

        items: 
        [
        {
            xtype: "titlebar",
            id:"mainNavigationBar",
            docked: "top",
            title: "Karaoke",
            items: 
            [
            {
                xtype: "button",
                align: 'left',
                text: "Regresar",
                ui: "back",
                id:"back"
            }
            ]
        },
        {
            id: 'launchscreen',
            cls: 'panelBackground',
            scrollable: true,
            items:[
                {
                    xtype:'container',
                    flex:'1',
                    text:'Fotos',
                    margin: 20,
                },
                {
                    xtype:'button',
                    flex:'1',
                    text:'Play',
                    margin: 20,
                    id:"playButton",
                    handler: function() {
	                	console.log('correcto');
	                	startKaraoke();  
                    },                    
                }
            ],   
        }       
        ]
    }
});