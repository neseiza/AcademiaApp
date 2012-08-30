Ext.define('MyApp.view.Contacts', {
    extend: 'Ext.List',
    xtype: 'contacts',

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
