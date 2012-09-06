Ext.define("MyApp.view.BibliografiaHombres", {
    extend: "Ext.Container",

    requires:
    [
        'Ext.navigation.Bar',
        'MyApp.view.BibliografiaH'
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
            title: "Biografías Hombres",
            items: 
            [
            {
                xtype: "button",
                align: 'left',
                text: "Regresar",
                ui: "back",
                id:"bibliografia"
            }
            ]
        },
        {
            xtype:'bibliografiah'      
        }       
        ]
    }
});