Ext.define("MyApp.view.GaleriaMenu", {
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
            title: "Menú de Media",
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
                    xtype:'button',
                    id:'galeriafotos',
                    flex:'1',
                    text:'Fotos',
                    margin: 20,
                },
                {
                    xtype:'button',
                    id:'galeriavideos',
                    flex:'1',
                    text:'Videos',
                    margin: 20,
                }
            ],   
        }       
        ]
    }
});