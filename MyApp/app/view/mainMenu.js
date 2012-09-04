Ext.define('MyApp.view.mainMenu', {
extend: 'Ext.navigation.View',
    xtype: 'mainview',
    
    requires:
    [
    ],
    
    layout: 'vbox',
    
    config: 
    {
    	cls:'panelBackground',
	    navigationBar:false,
        layout: 
        {
            type: 'card',
            animation: 
            {
                type: 'flip',
                direction: 'left',
                duration: 250
            }
        },

        items:
        {
            cls: 'panelBackground',
            id: 'launchscreen',
            items:[
            {
            	//html:'<img src="./resources/images/header.jpg" widht=' +((wWidth/10)+50)+ ' height=' +(( wHeight/6)+50) + ' class="displayed"/>'
            	html:'<img src="./resources/images/logo.gif" class="displayedHeader"/>'
            },
            {
                    xtype: 'panel',
                    layout:'hbox',
                    flex: 1,
                    items:[
                        {
                            xtype:'button',
                            id:'intro',
                            ui:'silver',
                            flex:'1',
                            text:'Intronducci&oacute;n',
                            margin: 20,
                        },
                        {
                            xtype:'button',
                            flex:'1',
                            text:'Galer&iacute;a',
                            ui:'silver',
                            id:'galeriaMenu',
                            margin: 20,
                        },
                    ],
                    
                },
                {
                    xtype: 'panel',
                    layout:'hbox',
                    flex: 1,
                    items:[
                        {
                            xtype:'button',
                            flex:'1',
                            ui:'silver',
                            text:'Biograf&iacute;a',
                            id:'bibliografia',
                            margin: 20,
                        },
                        {
                            xtype:'button',
                            id:'musica',
                            ui:'silver',
                            flex:'1',
                            text:'M&uacute;sica',
                            margin: 20,
                        },
                    ],
                    
                },
                {
                    xtype: 'panel',
                    layout:'hbox',
                    flex: 1,
                    items:[
                        {
                            xtype:'button',
                            id:'noticias',
                            ui:'silver',
                            flex:'1',
                            text:'Noticias',
                            margin: 20,
                        },
                        {
                            xtype:'button',
                            flex:'1',
                            ui:'silver',
                            text:'Karaoke',
                            id:'karaoke',
                            margin: 20,
                        },
                    ],
                    
                },
                {
	            	xtype:'button',
                    text:'Exit',
                    handler: function() {
	                	navigator.app.exitApp();  
                    },                
                }
            ]   
        }           
    }    

});