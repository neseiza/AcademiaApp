Ext.define('MyApp.view.otralist', {
    extend: 'Ext.List',
    xtype: 'list1',

    config: {
        title: 'Address Book',
        cls: 'x-contacts',

        store: 'Contacts',
        itemTpl: [
            '<div class="headshot" style=""></div>',
            '{firstName} {lastName}',
            '<span>{title}</span>'
        ].join(''),
        data: [
	        { firstName: 'Item 1' },
        ]
    }
});