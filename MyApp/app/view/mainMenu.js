Ext.define('MyApp.view.mainMenu', {
extend: 'Ext.navigation.View',
    xtype: 'mainview',
    
    requires:
    [
    ],
    
    layout: 'vbox',
    
    config: 
    {
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
            id: 'launchscreen',
            cls: 'panelBackground',
            items:[
            {
            	//html:'<img src="./resources/images/header.jpg" widht=' +((wWidth/10)+50)+ ' height=' +(( wHeight/6)+50) + ' class="displayed"/>'
            	html:'<img src="./resources/images/header.jpg" class="displayedHeader"/>'
            },
            {
                    xtype: 'panel',
                    layout:'hbox',
                    flex: 1,
                    items:[
                        {
                            xtype:'button',
                            id:'intro',
                            flex:'1',
                            text:'Intronducci&oacute;n',
                            margin: 20,
                        },
                        {
                            xtype:'button',
                            flex:'1',
                            text:'Galer&iacute;a',
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
                            text:'Biograf&iacute;a',
                            id:'bibliografia',
                            margin: 20,
                        },
                        {
                            xtype:'button',
                            id:'musica',
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
                            flex:'1',
                            text:'Noticias',
                            margin: 20,
                        },
                        {
                            xtype:'button',
                            flex:'1',
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