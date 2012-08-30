Ext.define("MyApp.view.BibliografiaMujeres", {
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
            title: 'Concursantes Mujeres',
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
                        'nombre', 'edad', 'ocupacion', 'contentSnippet', 'imagen','content',
                        {name: 'leaf', defaultValue: true}
                    ],
                root: {
                    leaf: false
                },
                proxy: {
                    type: 'ajax',
                    url: "resources/json/mujeres.json",
                    reader: {
                        type: 'json',
                        rootProperty: 'responseData.feed.entries'
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
                    '<td><img src=\"{imagen}\"alt=\"foto\" width=\"100px\""> </td>'+
                    '<td><h1><b>{nombre}</b></h1><br><b>Edad: </b>{edad}<br><b>Ocupacion: </b>{ocupacion}</td>'+
                    '</table>'
            }, 
            /*
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