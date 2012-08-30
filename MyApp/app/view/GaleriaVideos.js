Ext.define("MyApp.view.GaleriaVideos", {
    extend: "Ext.Container",
    
    cls: 'panelBackground',
    config: {
        items: [{
            xtype: "toolbar",
            docked: "top",
            title: "Galeria",
            items: 
            [{
                xtype: "spacer"
            },
            {
                xtype: "button",
                text: "New",
                ui: "action",
                id:"new-note-btn"
            }]
        }]
    }
});

