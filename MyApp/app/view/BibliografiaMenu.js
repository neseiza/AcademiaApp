Ext.define("MyApp.view.BibliografiaMenu", {
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
            title: "Biograf&iacute;as",
            items: 
            [
            {
                id: "back",
                xtype: "button",
                align: 'left',
                text: "Regresar",
                ui: "back"
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
                    id:'bibliografiamujeres',
                    flex:'1',
                    text:'Mujeres',
                    margin: 20,
                },
                {
                    xtype:'button',
                    id:'bibliografiahombres',
                    flex:'1',
                    text:'Hombres',
                    margin: 20,
                }
            ],   
        }       
        ]
    }
});