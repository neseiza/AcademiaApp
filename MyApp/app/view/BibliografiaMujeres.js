Ext.define("MyApp.view.BibliografiaMujeres", {
    extend: "Ext.Container",

    requires:
    [
        'Ext.navigation.Bar',
        'MyApp.view.BibliografiaM'
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
            title: "Bibliografias de mujeres",
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
            xtype:'bibliografiam'      
        }       
        ]
    }
});

            /*
               getItemTextTpl: function(recordnode) {
                return template =   
                    '<table border="0">'+
                    '<tr>'+
                    '<td><img src=\"{imagen}\"alt=\"foto\" width=\"100px\""> </td>'+
                    '<td><h1><b>{nombre}</b></h1><br><b>Edad: </b>{edad}<br><b>Ocupacion: </b>{ocupacion}</td>'+
                    '</table>'
            }, 
            
            //Dentro del nested list
            detailCard: {
                xtype: 'panel',
                scrollable: true,
                styleHtmlContent: true,
                cls: 'panelBackground',
            },


            listeners: {
                itemtap: function(nestedList, list, index, element, post) {
                    Ext.Msg.alert('Selected!', '<s>You selected </s>' + post.get('firstName'));
                }
            }
            
            listeners: {
                itemtap: function(nestedList, list, index, element, post) {
                    this.getDetailCard().setHtml(post.get('content'));
                }
            }
            */