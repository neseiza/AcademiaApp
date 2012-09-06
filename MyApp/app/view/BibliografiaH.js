Ext.define("MyApp.view.BibliografiaH", {
    extend: 'Ext.List',
    xtype: 'bibliografiah',
    title:'Biografía Hombres',
    config: {
        cls: 'panelBackground',
        store: 'BibliografiaH',
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