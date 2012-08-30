Ext.define("laAca.view.BibliografiaPersonal", {
    extend: "Ext.dataview.List",
    alias: "widget.bibliografiapersonal",
    requires:
    [
        'Ext.navigation.Bar'
    ],
    config: {
        cls: 'panelBackground',
        loadingText: "Loading Notes...",
        emptyText:  '</pre><div class="notes-list-empty-text">No notes found.</div<pre>',
        onItemDisclosure: true,
        itemTpl: '</pre><div class="list-item-title">{title}</div><div class="list-item-narrative">{narrative}</div><pre>',
    }

});
