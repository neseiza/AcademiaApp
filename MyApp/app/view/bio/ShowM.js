Ext.define('MyApp.view.bio.ShowM', {
    extend: 'Ext.Container',
    xtype: 'bio-show',

    config: {
        title: 'Base',
        baseCls: 'x-show-contact',
        items: [
            {
            id: 'contenido',
            tpl: [
                '<table border="0">'+
                '<tr>'+
                '<td><img src=\"http://fwd.mx/wapportal/sites/academia/images/{id}.jpg\"alt=\"foto\" width=\"120px\""> </td>'+
                '<td align="left" class="biblio"><b>{name}</b><br>'+
                    '<b>Edad:</b> {age}<br>'+
                    '<b>Lugar:</b> {birthplace}<br>'+
                    '<b>Estatus:</b> {status}<br>'+
                    '<b>Descripción:</b> {bio}'+
                    '</table>'
            ].join(''),
            items:
            {
            xtype: "titlebar",
            id:"mainNavigationBar",
            docked: "top",
            title: "Biografía",
            items: 
            [
            {
                xtype: "button",
                align: 'left',
                text: "Regresar",
                ui: "back",
                id:'backshowm',
            }
            ]
        },
            },
        ],
        record: null
    },
    setRecord: function(newRecord) {
        if (newRecord) {
            this.down('#contenido').setData(newRecord.data);
        }
    }
});
