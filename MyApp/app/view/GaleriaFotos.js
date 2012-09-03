Ext.define("MyApp.view.GaleriaFotos", {
           extend: "Ext.Panel",
    requires:
    [
        'Ext.navigation.Bar'
    ],
    
        items: 
        {
            extend: 'Ext.dataview.DataView',
            fullscreen: true,
            cls: 'panelBackground',
            store: {
                autoLoad: true,
                fields: ['nombre', 'path'],
                proxy: {
                    type: 'ajax',
                    url: "resources/json/galeriafotos.json",
                    reader: {
                        type: 'json',
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
            items:
            {
                xtype: "titlebar",
                id:"mainNavigationBar",
                docked: "top",
                title: "Galeria",
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
            listeners: {
                itemtap : function(DataView, item, index, e, eObjs ) {  
                    Ext.Msg.alert(e.get('nombre'), '<img src="'+e.get('path')+'" width="'+(wWidth-50)+'" height="'+ wHeight/4 +'"> ' );
                }
            },
        }       
     
});

            