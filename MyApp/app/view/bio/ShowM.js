


Ext.define('MyApp.view.bio.ShowM', {
    extend: 'Ext.Container',
    xtype: 'bio-show',

    config: {
        title: 'Base',
        baseCls: 'x-show-contact',
        items:{
            xtype:'container',
            items: [
            {
                xtype: "titlebar",
                id:"mainNavigationBar",
                docked: "top",
                title: "Biografia",
                items: 
                [   
                {
                    xtype: "button",
                    align: 'left',
                    text: "Regresar",
                    ui: "back",
                    id:'backshowm',
                },
                ]
            },
            {
                id:'contenido2',
                tpl:[
                    'asdf{status}'
                ]
            },
            {   
                id: 'contenido',
                tpl: [
                    '<table border="0">'+
                    '<tr align="center">'+
                    '<td><img src=\"http://fwd.mx/wapportal/sites/academia/images/{id}.jpg\"alt=\"foto\" width=\"120px\""> </td></tr>'+
                    '<tr><td align="left" class="biblio"><b>{name}</b><br>'+
                        '<b>Edad:</b> {age}<br>'+
                        '<b>Lugar:</b> {birthplace}<br>'+
                        '<b>Estatus:</b> {status}<br>'+
                        '<b>Descripción:</b> {bio}</td></tr>'+
                        '</table>'
                ].join(''),
            },
            {
                xtype:'container',
                scrollable:true,

                items:
                {
                    flex:'2',
                    scrollable:true,
                    xtype:'button',
                    docked:'bottom',
                    text:'Votar!!',
                    id:'contenido2',
                    tpl:'asdf',
                    

                }
            }
        ],
        record: null
    },
},

    setRecord: function(newRecord) {
        if (newRecord) {this.down('#contenido').setData(newRecord.data);};
        

    },
    
});
