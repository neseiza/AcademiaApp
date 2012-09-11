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
                    //Cambiar por el feed de produccion
                    url: "resources/json/galeriafotos.json",
                    reader: {
                        type: 'json',
                        //Cambiar root dependiendo el feed
                        rootProperty: 'responseData.feed.entries'
                    }
                }
            },
            baseCls: 'categories-list',
                itemTpl: [
                    '<div class="image" style="background-image:url({path})"></div>',
                    '<div class="name">{nombre}</div>'
                ].join(''),
            records: null,
            listeners: {
                itemtap : function(DataView, item, index, e, eObjs ) {  
                    Ext.Msg.alert(e.get('nombre'), '<img src="'+e.get('path')+'" class="galery">' ); 
                    //var musica = Ext.create('MyApp.view.BibliografiaHombres');  
                }
            }
        }
        ]
    }
});