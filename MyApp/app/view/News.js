Ext.define('MyApp.view.News', {
    extend: 'Ext.List',
    xtype: 'news',

    config: {
        title: 'Address Book',
        cls: 'x-contacts',

        store: 'Contacts',
        itemTpl: [
            '<div>{news}</div><div>{date}</div>',
        ].join(''),
        data: [
	        { news: 'algo', date: '12-2-2' },
        ]
    }
});