Ext.define("MyApp.view.BibliografiaHombres", {
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
                title: "Bibliografía Hombres",
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
                value   : 'h'
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
                itemtap : function(DataView, item, index, e, eObjs ) {  
                    Ext.Msg.alert(e.get('name'), '<div align="justify">'+e.get('bio')+"</div>" );      
                }
                /*
                getItemTextTpl: function(recordnode) {
                    var itemTpl = new Ext.XTemplate('<tpl for = ".">',
                    ,
                    '<tpl if="gendre==m">',   // Or '<tpl if="active==\'true\'">',
                         '<div class= "subSectionToggleButton">Active</div>', 
                    '</tpl>',   
                    '</tpl>');
                    return itemTpl = '<div>{gendre}</div>'
                }, 

                listeners: {
                    itemtap: function(nestedList, list, index, element, post) {
                        Ext.Msg.alert('Selected!', 'You selected ' + post.get('firstName'));
                    }
                }
                */
            }
        }
        ]
    }
});



