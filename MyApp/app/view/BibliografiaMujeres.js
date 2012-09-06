Ext.define("MyApp.view.BibliografiaMujeres", {
    extend: "Ext.Container",
    xtype: "bibliografiamujeres",
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
                title: "Biografía Mujeres",
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
            store: {
                autoLoad: true,
                fields: ['id','name','age','birthplace','status','gendre','bio'],
                proxy: {
                    type: 'ajax',
                    url: "resources/json/alumnos.json",
                    reader: {
                        type: 'json',
                        rootProperty: 'items'
                    }
                },
                filters: 
                {
                property: 'gendre',
                value   : 'm'
                },
            },
            
    
            baseCls: 'categories-list',
                itemTpl: [
                    '<table border="1">'+
                    '<tr>'+
                        '<td><img src=\"http://fwd.mx/wapportal/sites/academia/images/{id}.jpg\"alt=\"foto\" width=\"120px\""> </td>'+
                        '<td align="left" class="biblio"><b>{name}</b><br>'+
                            '<b>Edad:</b> {age}<br>'+
                            '<b>Lugar:</b> {birthplace}<br>'+
                            '<b>Estatus:</b> {status}'+
                    '</table>'
                ].join(''),
            records: null,
            listeners: {
                itemtap : function temporal(DataView, item, index, e, eObjs ) {  
                    Ext.Msg.alert(e.get('nombre'), '<div align="justify">'+e.get('bio')+"</div>" );
                    var test = "hola"; 
                    Ext.dispatch({
                        controller: 'MyApp.controller.Main',
                        action: 'toTest',
                        test: 'hola',
                    });
                }
            }
        }
        ]
    }
});



