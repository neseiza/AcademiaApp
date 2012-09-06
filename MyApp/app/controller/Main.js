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
		if(activeConnection()){
	    	this.getMain().push(noticias);    
        }
        else{
	        this.getMain().push(Ext.Msg.alert('Network status', 'Para poder ver esta secci&oacute;n se requiere acceso a internet.', Ext.emptyFn));
        }
    },
    toIntro: function() {
    	var intro = Ext.create('MyApp.view.Introduccion');
		this.getMain().push(intro);
    },
    toMainMenu:function() {
    	var menu = Ext.create('MyApp.view.mainMenu');
	    this.getMain().push(menu);
    },
    //Quitar comentarios para device
    toBibliografia: function() {
        var bibliografia = Ext.create('MyApp.view.BibliografiaMenu');
        //if(activeConnection()){
	    	this.getMain().push(bibliografia);    
        //}
        //else{
	    //    this.getMain().push(Ext.Msg.alert('Network status', 'Para poder ver esta secci&oacute;n se requiere acceso a internet.', Ext.emptyFn));
        //}
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
        var galeriafotos = Ext.create('MyApp.view.GaleriaFotos');
        this.getMain().push(galeriafotos);
    },
    toGaleriaVideos: function() {
        var galeriavideos = Ext.create('MyApp.view.GaleriaVideos');
        this.getMain().push(galeriavideos);
    },
    toKaraoke: function() {
        var karaoke = Ext.create('MyApp.view.Karaoke');
        this.getMain().push(karaoke);
    },


});
