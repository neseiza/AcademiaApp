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
            xtype: 'nestedlist',
            title: 'Concursantes Hombres',
            toolbar: {
            componentCls: 'x-toolbar-dark',
            items: 
            [
            {
                id: "bibliografia",
                xtype: "button",
                align: 'left',
                text: "Regresar",
                ui: "back"
            }
            ]
        },
            //displayField: 'nombre',
            store: {
                type: 'tree',
                fields: [
                        'id','name','age','birthplace','status','gendre','bio',
                        {name: 'leaf', defaultValue: true}
                    ],
                root: {
                    leaf: false
                },
                proxy: {
                    type: 'ajax',
                    url: "resources/json/alumnos.json",
                    reader: {
                        type: 'json',
                        rootProperty: 'items'
                    }
                }
            },
            detailCard: {
                xtype: 'panel',
                scrollable: true,
                styleHtmlContent: true,
                cls: 'panelBackground',
            },
            //Mostrar el contenido en html
            getItemTextTpl: function(recordnode) {
                return template = 
                    '<table border="0">'+
                    '<tr>'+
                    '<td><img src=\"http://fwd.mx/wapportal/sites/academia/images/{id}.jpg\"alt=\"foto\" width=\"100px\""> </td>'+
                    '<td><h1><b>{name}</b></h1><br><b>Edad:</b> {age}<br><b>Estatus:</b> {status}'+
                    '</table>'
            },



            /*

            getItemTextTpl: function(recordnode) {
                var itemTpl = new Ext.XTemplate('<tpl for = ".">',
                '<div>{gendre}</div>',
                '<tpl if="gendre==m">',   // Or '<tpl if="active==\'true\'">',
                     '<div class= "subSectionToggleButton">Active</div>', 
                '</tpl>',   
                '</tpl>');
                return itemTpl
            }, 

            listeners: {
                itemtap: function(nestedList, list, index, element, post) {
                    Ext.Msg.alert('Selected!', 'You selected ' + post.get('firstName'));
                }
            }
            */
            listeners: {
                itemtap: function(nestedList, list, index, element, post) {
                    this.getDetailCard().setHtml(post.get('content'));
                }
            }
        }       
        ]
    }
});