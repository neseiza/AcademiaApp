Ext.define('MyApp.controller.Main', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            main: 'mainview',
            intro: '#intro',
            back: '#back',
            noticias : '#noticias',
            musica: '#musica',
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
});
