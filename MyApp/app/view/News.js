Ext.define('MyApp.view.News', {
    extend: 'Ext.List',
    xtype: 'news',

    config: {
        title: 'Address Book',
        cls: 'x-contacts',

        store: 'Contacts',
        itemTpl: [
            '<div class="newsF">{news}</div><div class="dateF">{date}</div>',
        ].join(''),
        data: [
	        { news: 'algo', date: '12-2-2' },
        ]
    }
});