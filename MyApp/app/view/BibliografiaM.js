Ext.define("MyApp.view.BibliografiaM", {
    extend: 'Ext.List',
    xtype: 'bibliografiam',
    title:'Biografía Mujeres',
    config: {
        cls: 'panelBackground',
        store: 'BibliografiaM',
        itemTpl: 
        [
            '<table border="0">'+
            '<tr>'+
                '<td><img src=\"http://fwd.mx/wapportal/sites/academia/images/{id}.jpg\"alt=\"foto\" width=\"120px\""> </td>'+
                '<td align="left" class="biblio"><b>{name}</b><br>'+
                    '<b>Edad:</b> {age}<br>'+
                    '<b>Lugar:</b> {birthplace}<br>'+
                    '<b>Estatus:</b> {status}'+
            '</table>'
        ].join(''),
    }
});