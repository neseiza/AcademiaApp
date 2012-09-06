
Ext.define('MyApp.view.News', {
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
            title: 'Noticias',
            toolbar: {
            componentCls: 'x-toolbar-dark',
            items: 
            [
            {
                id: "back",
                xtype: "button",
                align: 'left',
                text: "Regresar",
                ui: "back"
            }
            ]
        },
        
            store: {
                type: 'tree',
                fields: ['id', 'title','description','image', 'pubDate',
                        {name: 'leaf', defaultValue: true}
                    ],
                root: {
                    leaf: false
                },
                proxy: {
                           type: 'jsonp',
                           //url: 'http://fwd.mx/wapportal/generateFeed?feed=clubacademia_noticias&format=json&width=300',
                           url: noticiasJson,
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
                    '<div class="newsF">{title}</div><div class="dateF">{pubDate}</div>'
            }, 
            /*
            listeners: {
                itemtap: function(nestedList, list, index, element, post) {
                    Ext.Msg.alert('Selected!', '<s>You selected </s>' + post.get('firstName'));
                }
            }
            */
            listeners: {
                itemtap: function(nestedList, list, index, element, post) {
                    this.getDetailCard().setHtml('<div class="newsF">'+post.get('title')+'</div><div class="dateF">'+post.get('pubDate')+'</div> <table border="0">'+
                    '<tr>'+
                    '<td><img src=\"'+post.get('image')+'\"alt=\"foto\" width=\"100px\""> </td> </tr> <tr>'+
                    '<td>'+post.get('description')+'</td> </tr>'+
                    '</table>');
                    console.log(element);
                    console.log(nestedList);
                    console.log(list);                    
                    console.log(post);
                }
            }
        }       
        ]
    }
});