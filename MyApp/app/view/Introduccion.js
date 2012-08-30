Ext.define("MyApp.view.Introduccion", {
    extend: "Ext.Container",

    requires:
    [
        'Ext.navigation.Bar'
    ],

    config: {
        
        layout: 
        {
            type: 'card',
            animation: 
            {
                type: 'slide',
                direction: 'right',
                duration: 1
            }
        },

        items: 
        [
        {
            xtype: "titlebar",
            id:"mainNavigationBar",
            docked: "top",
            title: "Introducción",
            items: 
            [
            {
                xtype: "button",
                id:'back',
                align: 'left',
                text: "Regresar",
                ui: "back",
            }
            ]
        },
        {
            id: 'launchscreen',
            cls: 'panelBackground',
            scrollable:true,

            items:[
            	{
	            	docked: 'top',
	            	html: '<div class="centered"> Introducc&oacute;n </dib>'
            	},
            	{
	            	xtype: 'panel',
		                items:{
		                    layout: 'hbox',
		                    items:
		                    [
		                        {flex:1},
		                        {html:'<br /><iframe width="560" height="315" src="http://www.youtube.com/embed/0d8EDeTH9GU" frameborder="0" allowfullscreen></iframe>'},
		                        {flex:1}
		                    ]
		                }
                },
                {
	                xtype: 'panel',
		            html:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras lacus ante, consectetur ut fringilla quis, sollicitudin at nisi. Etiam pretium enim ac augue sodales feugiat. In eget lorem non elit hendrerit posuere eu vitae arcu. Proin ut erat tellus, eu tempus odio. Mauris nec dui aliquet metus adipiscing molestie. Integer euismod pellentesque nisl at vehicula. Proin consectetur eros non diam malesuada sollicitudin. Nunc dignissim mauris in turpis viverra viverra. Sed semper ullamcorper felis posuere iaculis. <p> Mauris id malesuada elit. Aenean neque risus, cursus sed volutpat vitae, adipiscing sit amet mi. Cras ut tortor leo. Nulla facilisi. Vestibulum id lacus mi, pharetra tempus quam. Aenean posuere imperdiet dui id blandit. Nulla dictum, odio in varius feugiat, sapien lorem scelerisque erat, in laoreet urna sapien et purus. Proin turpis eros, euismod ac mattis id, scelerisque ut eros. Sed ligula sem, mattis nec pellentesque nec, molestie et risus. In non aliquam risus. Cras sed accumsan dui. Donec at felis dapibus ante tempor placerat.',
		            cls:'introText',
                }
            ],   
        }       
        ]
    }
});