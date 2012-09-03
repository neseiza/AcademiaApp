Ext.define("MyApp.view.GaleriaVideos", {
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
            xtype: 'dataview',
            fullscreen: true,
            cls: 'panelBackground',
            items:
            {
                xtype: "titlebar",
                id:"mainNavigationBar",
                docked: "top",
                title: "Galeria Videos",
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
            store: {
                autoLoad: true,
                fields: ['nombre', 'path','image'],
                proxy: {
                    type: 'ajax',
                    url: "resources/json/galeriavideos.json",
                    reader: {
                        type: 'json',
                        rootProperty: 'responseData.feed.entries'
                    }
                }
            },
            baseCls: 'categories-list',
                itemTpl: [
                    '<div class="image" style="background-image:url({image})"></div>',
                    '<div class="name">{nombre}</div>'
                ].join(''),
            records: null,
            listeners: {
                itemtap : function(DataView, item, index, e, eObjs ) {  
                    Ext.Msg.alert(e.get('nombre'), '<embed src="'+e.get('path')+'" width="100%">' ); 
                    //var musica = Ext.create('MyApp.view.BibliografiaHombres');  
                }
            }
        }
        ]
    }
});