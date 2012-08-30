Ext.define("MyApp.view.GaleriaFotos", {
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
            title: "Galer&iacute;a de Fotos",
            items: 
            [
            {
                xtype: "button",
                align: 'left',
                text: "Regresar",
                ui: "back",
                id:"galeriaMenu"
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
