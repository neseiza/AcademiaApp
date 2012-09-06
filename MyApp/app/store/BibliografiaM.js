Ext.define('MyApp.store.BibliografiaM', {
    extend: 'Ext.data.Store',

    config: {
        model: 'MyApp.model.Bibliografia',
        autoLoad: true,
        sorters: 'name',
        grouper: {
            groupFn: function(record) {
                return record.get('name')[0];
            }
        },
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
        
    }
});