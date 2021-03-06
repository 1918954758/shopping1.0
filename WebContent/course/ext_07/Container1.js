/**
 * 
 */
Ext.onReady(function () {
	var component1 = Ext.create('Ext.Component', {
		html:'First Component'
	});

	 var component2 = Ext.create('Ext.Component', {
		html: 'Second Component'
	});

	var component3 = Ext.create('Ext.Component', {
 		html: 'Third Component'
	});

	var component4 = Ext.create('Ext.Component', {
		html: 'Fourth Component'
	});

	var container = Ext.create('Ext.container.Container', {
		style: {borderStyle: 'solid', borderWidth: '2px' },
		width: '50%',
		items: [component3, component4]
	});

     Ext.create('Ext.container.Container', {
        renderTo: Ext.getBody(),
        title: 'Container',
        border: 1,
        width: '50%',
        style: {borderStyle: 'solid', borderWidth: '2px' },
        items: [component1, component2,  container]
     });
  });