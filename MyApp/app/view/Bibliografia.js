Ext.define("MyApp.view.Bibliografia", {
    extend: "Ext.Container",
    animation:{
        type:'pop',
        
    },
    requires:
    [
        'Ext.navigation.Bar'
    ],

    config: {

        
        layout: 
        {
            type: 'card',
            animation:{
                type:'pop',
            },
        },

        items: 
        [
        {
            xtype: "titlebar",
            id:"mainNavigationBar",
            docked: "top",
            title: "Introducción",
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
                    text:'Videos',
                    margin: 20,
                }
            ],   
        }       
        ]
    }
});