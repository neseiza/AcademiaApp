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
                fields: ['id', 'title','image','description'],
                proxy: {
                    type: 'ajax',
                    //Obtener el feed mediante direccion web
                    url: "resources/json/galeriavideos.json",
                    reader: {
                        type: 'json',
                        rootProperty: 'items'
                    }
                }
            },
            baseCls: 'categories-list',
                itemTpl: [
                    '<div class="image" style="background-image:url({image})"></div>',
                    '<div class="name">{title}</div>'
                ].join(''),
            records: null,
            listeners: {
                itemtap : function(DataView, item, index, e, eObjs ) { 
                    Ext.Msg.alert(e.get('description'), '<embed src="localhost:9080/wapportal/util?action=video&feed_id=clubacademia_videos&item_id='+e.get('id')+'" width="100%">' );   
                }
            }
        }
        ]
    }
});