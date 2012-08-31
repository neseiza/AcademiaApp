Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'mainview',
            intro: '#intro',
            back: '#back',
            noticias : '#noticias',
            musica: '#musica',
            bibliografia: '#bibliografia',
            bibliografiahombres: '#bibliografiahombres',
            bibliografiamujeres: '#bibliografiamujeres',
            galeria:'#galeriaMenu',
            galeriafotos:'#galeriafotos',
            galeriavideos:'#galeriavideos',
            karaoke:'#karaoke',
        },

        control: {
            main: {
 
            },
            intro: {
                tap: 'toIntro'
            },
            back: {
	            tap: 'toMainMenu'
            },
            noticias: {
	            tap: 'toNoticias'
            },
            musica: {
	            tap: 'toMusica'
            },
            galeria:{
                tap:'toGaleriaMenu'
            },
            galeriafotos:{
                tap:'toGaleriaFotos'
            },
            galeriavideos:{
                tap:'toGaleriaVideos'
            },
            bibliografia:{
                tap:'toBibliografia'
            },
            bibliografiahombres:{
                tap:'toBibliografiaHombres'
            },
            bibliografiamujeres:{
                tap:'toBibliografiaMujeres'
            },
            karaoke:{
                tap:'toKaraoke'
            },
        }
    },
    toMusica: function() { 
		var musica = Ext.create('MyApp.view.Musica');  
		this.getMain().push(musica);
    },
    toNoticias: function() {
		var noticias = Ext.create('MyApp.view.Noticias');  
		this.getMain().push(noticias);	
		
    },
    toIntro: function() {
    	var intro = Ext.create('MyApp.view.Introduccion');
		this.getMain().push(intro);
		  
    },toMainMenu:function() {
    	var menu = Ext.create('MyApp.view.mainMenu');
	    this.getMain().push(menu);
    },
    toBibliografia: function() {
        var bibliografia = Ext.create('MyApp.view.BibliografiaMenu');
        this.getMain().push(bibliografia);
    },
    toBibliografiaHombres: function() {
        var bibliografiahombres = Ext.create('MyApp.view.BibliografiaHombres');
        this.getMain().push(bibliografiahombres);
    },
    toBibliografiaMujeres: function() {
        var bibliografiamujeres = Ext.create('MyApp.view.BibliografiaMujeres');
        this.getMain().push(bibliografiamujeres);
    },
    toGaleriaMenu: function() {
        var galeriamenu = Ext.create('MyApp.view.GaleriaMenu');
        this.getMain().push(galeriamenu);
    },
    toGaleriaFotos: function() {
        var galeriafotos = Ext.create('Ext.dataview.DataView', {
            xtype: 'galeriafotos',
            fullscreen: true,
            cls: 'panelBackground',
            store: {
                autoLoad: true,
                fields: ['nombre', 'path'],
                proxy: {
                    type: 'ajax',
                    url: "resources/json/galeriafotos.json",
                    reader: {
                        type: 'json',
                        rootProperty: 'responseData.feed.entries'
                    }
                }
            },
            baseCls: 'categories-list',
                itemTpl: [
                    '<div class="image" style="background-image:url({path})"></div>',
                    '<div class="name">{nombre}</div>'
                ].join(''),
            records: null,
            items:
            {
                xtype: "titlebar",
                id:"mainNavigationBar",
                docked: "top",
                title: "Galeria Fotos",
                items: 
                [
                {
                    xtype: "button",
                    align: 'left',
                    text: "Regresar",
                    ui: "back",
                    id:"galeriaMenu"
                }
                ]
            },
            listeners: {
                itemtap : function(DataView, item, index, e, eObjs ) {  
                    Ext.Msg.alert(e.get('nombre'), '<img src="'+e.get('path')+'" width="100%"> ' );
                }
            },
        });
        this.getMain().push(galeriafotos);
    },
    toGaleriaVideos: function() {
        var galeriavideos = Ext.create('Ext.dataview.DataView', {
            xtype: 'galeriavideos',
            fullscreen: true,
            cls: 'panelBackground',
            store: {
                autoLoad: true,
                fields: ['nombre', 'path','image'],
                proxy: {
                    type: 'ajax',
                    url: "resources/json/galeriavideos.json",
                    reader: {
                        type: 'json',
                        rootProperty: 'responseData.feed.entries'
                    }
                }
            },
            baseCls: 'categories-list',
                itemTpl: [
                    '<div class="image" style="background-image:url({image})"></div>',
                    '<div class="name">{nombre}</div>'
                ].join(''),
            records: null,
            items:
            {
                xtype: "titlebar",
                id:"mainNavigationBar",
                docked: "top",
                title: "Galeria Videos",
                items: 
                [
                {
                    xtype: "button",
                    align: 'left',
                    text: "Regresar",
                    ui: "back",
                    id:"galeriaMenu"
                }
                ]
            },
            listeners: {
                itemtap : function(DataView, item, index, e, eObjs ) {  
                    Ext.Msg.alert(e.get('nombre'), '<embed src="'+e.get('path')+'" width="100%">' ); 
                }
            },
        });
        this.getMain().push(galeriavideos);
    },
    toKaraoke: function() {
        var karaoke = Ext.create('MyApp.view.Karaoke');
        this.getMain().push(karaoke);
    },
});
