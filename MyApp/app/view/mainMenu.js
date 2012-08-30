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
            scrollable: true,
            items:[
            {
                xtype: 'panel',
                items:{
                    layout: 'hbox',
                    items:
                    [
                        {flex:1},
                        {html:'<div class="headerAcademia"></div>'},
                        {flex:1}
                    ]
                }
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
                    
                }
            ]   
        }           
    }    

});