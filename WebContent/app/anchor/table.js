Ext.onReady(function(){    
    var panel = new Ext.Panel({   
       renderTo: Ext.getBody(),   
       //title:'�������',   
       layout:'table',
       width:1000,   
       height:500,   
       //layoutConfig:{columns: 2},//���������ֳ�3��   
       items:[
    	   {
    		   //title:'Ԫ��1',
    		   html:'a',
    		   rowspan: 1,
    		   colspan: 1,
    		   width: 500,
    		   height: 500,
    		   layout: 'column',
    		   items: [
    			   {
    				   width: 500,    
        			   height: 250,     
        			   title: "��",
        			   items: [gridPanel_11]
    			   },{
    				   width: 500,    
        			   height: 250,     
        			   title: "��",
        			   items: [gridChart_21]
    			   }]
    	   }, {
    		   //title:'Ԫ��2',
    		   html:'b',
    		   rowspan: 1,
    		   colspan: 1,
    		   width: 500,
    		   height: 500,
    		   layout: 'column',
    		   items: [
    			   {
    				   width: 500,    
        			   height: 250,    
        			   title: "��",
        			   items: [gridChart_12]
    			   },{
    				   width: 500,    
        			   height: 250,    
        			   title: "��",
        			   items: [gridChart_22]
    			   }]
    	   }]   
      }); 
    
    //���Ͻ�չʾ����
    var gridPanel_11 = Ext.create('Ext.grid.Panel', {
    	width: '100%',
    	height: '100%',
    	viewConfig: {
    		loadingText: '��ѯ��...'
    	},
    	store: myStore,
    	sortableColumns: false,
    	enableColumnMove: false,
    	enableColumnHide: false,
    	disableSelection: true,
    	columns: [
    		{
    			text: '���', dataIndex: 'nbr', sortable: true, hidden: true, width: 0
    		},
    		{
    			text: '����ծȯ���', dataIndex: 'merg_type', align: 'center', sortable: false, width: '20%'
    		},
    		{
    			text: '���й�˾����', dataIndex: 'pty_name', align: 'center', sortable: false, width: '20%'
    		},
    		{
    			text: '���й�˾���', dataIndex: 'lxcb_days', align: 'center', sortable: false, width: '20%'
    		},
    		{
    			text: '�ڼ����ɶ�', dataIndex: 'ljcb_days', align: 'center', sortable: false, width: '20%'
    		},
    		{
    			text: 'ҵ������', dataIndex: 'indc_value', align: 'center', sortable: false, width: '20%'
    		}
    	],
    	forceFit: false,
    	bbar: Ext.create('Ext.PagingToolbar', {
    		id: 'tool',
    		store: myStore,
    		displayInfo: true,
//    		plugins: new Ext.ux.PageSize({
//    			params: {
//    				
//    			}
//    		}),
    		displayMsg: '��ʾ��{0} - {1} �����ܹ� {2} ��',
    		emptyMsg: 'û������'
    	})
    });
    //���½�չʾ����
    var gridChart_21 = Ext.create('Ext.chart.Chart', {
    	renderTo: Ext.getBody(),
    	height: 250,
    	width: 500,
    	animate: false, //����Ч��
    	store: store,
    	//������
    	axes: [{
    		type: 'Numeric',
    		position: 'left',
    		fields: ['indc_value'],//ҵ������
    		title: 'ָ��ֵ-a',
    		grid: {
    			odd: {
    				opacity: 1,
    				fill: '#ddd',
    				stroke: '#bbb',
    				'stroke-width': 1
    			}
    		},
    		minimum: 0,
    		adjustMinimumByMajorUnit: 0
    	}, {
    		type: 'Category',
    		position: 'bottom',
    		fields: ['data_month'], //store��
    		title: '�·�'
    	}],
    	series: [{
    		type: 'column',
    		axis: 'bottom',
    		label: {
    			display: 'outside',
    			field: 'indc_value',
    			color: '#333',
    			'text-anthor': 'middle',
    			font: '20px Lucida Grande'
    		},
    		xField: 'data_month',
    		yField: 'indc_value',
    		renderer: function(s, rec, attr, index, store) {
    			var color = "#3D96AE";
    			return Ext.apply(attr, {fill: color});
    		}
    	}]
    });
    //���Ͻ�չʾ����
    var gridChart_12 = Ext.create('Ext.chart.Chart', {
    	renderTo: Ext.getBody(),
    	height: 250,
    	width: 500,
    	animate: false, //����Ч��
    	store: store,
    	//������
    	axes: [{
    		type: 'Numeric',
    		position: 'left',
    		fields: ['indc_value'],//ҵ������
    		title: 'ָ��ֵ-b',
    		grid: {
    			odd: {
    				opacity: 1,
    				fill: '#ddd',
    				stroke: '#bbb',
    				'stroke-width': 1
    			}
    		},
    		minimum: 0,
    		adjustMinimumByMajorUnit: 0
    	}, {
    		type: 'Category',
    		position: 'bottom',
    		fields: ['data_month'], //store��
    		title: '�·�'
    	}],
    	series: [{
    		type: 'column',
    		axis: 'bottom',
    		label: {
    			display: 'outside',
    			field: 'indc_value',
    			color: '#333',
    			'text-anthor': 'middle',
    			font: '20px Lucida Grande'
    		},
    		xField: 'data_month',
    		yField: 'indc_value',
    		renderer: function(s, rec, attr, index, store) {
    			var color = "#3D96AE";
    			return Ext.apply(attr, {fill: color});
    		}
    	}]
    });
    //���½�չʾ����
	var gridChart_22 = Ext.create('Ext.chart.Chart', {
    	renderTo: Ext.getBody(),
    	height: 250,
    	width: 500,
    	animate: false, //����Ч��
    	store: store,
    	//������
    	axes: [{
    		type: 'Numeric',
    		position: 'left',
    		fields: ['indc_value'],//ҵ������
    		title: 'ָ��ֵ-c',
    		grid: {
    			odd: {
    				opacity: 1,
    				fill: '#ddd',
    				stroke: '#bbb',
    				'stroke-width': 1
    			}
    		},
    		minimum: 0,
    		adjustMinimumByMajorUnit: 0
    	}, {
    		type: 'Category',
    		position: 'bottom',
    		fields: ['data_month'], //store��
    		title: '�·�'
    	}],
    	series: [{
    		type: 'column',
    		axis: 'bottom',
    		label: {
    			display: 'outside',
    			field: 'indc_value',
    			color: '#333',
    			'text-anthor': 'middle',
    			font: '20px Lucida Grande'
    		},
    		xField: 'data_month',
    		yField: 'indc_value',
    		renderer: function(s, rec, attr, index, store) {
    			var color = "#3D96AE";
    			return Ext.apply(attr, {fill: color});
    		}
    	}]
    });
    
    //View
    var viewport = Ext.create('Ext.Viewport', {
    	autoScroll: false,
    	layout: {
    		type: 'border',
    		padding: '0 1 0 1'
    	},
    	items: [panel]
    });
    
    
    var store = Ext.create('Ext.data.Store', {
        //sorters: ['name'],
    	//Overriding the model's default proxy
    	proxy: {
    	    type: 'ajax',
    	    url: 'data/data01.json',
    	    reader: {
    	        type: 'json',
    	        root: 'results'
    	    }
    	},
    	autoLoad: true,
    	listeners: {
    		beforeLoad: function(store) {
    			msgTip = new Ext.LoadMask(gridChart.getEl(), {
    				msg: '��ѯ��...'
    			});
    			msgTip.show();
    			var params = {
    					'queryDate': '20210101', //Ext.getCmp('queryDate').getRawValue(),
    	    			'indexValue': '', //Ext.getCmp('indexValue').getRawValue(),
    	    			'contentValue': '' //Ext.getCmp('contentValue').getRawValue(),
    			};
    			Ext.apply(store.proxy.extraParams, params);
    		},
    		load: function(store, records, successful, operation, opts) {
    			if (successful) {
    				//datas = '{\'success\': \'true\', \'results\': [{\'nbr\': \'1\', \'dataIndex\': \'1\', \'pty_name\': \'1\', \'lxcb_days\': \'1\', \'ljcb_days\': \'1\', \'indc_value\': \'1\'}]}';
    			} else {
    				Ext.MessageBox.alert('��ʾ', '���ݼ���ʧ�ܣ�');
    			}
    			msgTip.hide();
    		}
    	}
    });
    
    //store
//    var store = Ext.create('Ext.data.Store', {
//    	fields: ['data_month', 'indc_value'],
//    	proxy: {
//    		type: 'ajax',
//    		timeout: 300000,
//    		url: '',
//    		reader: {
//    			type: 'json',
//    			root: 'datas'
//    		},
//    		actionMethods: {
//    			read: 'POST'
//    		},
//    		extraParams: {
//    			'queryDate': '20210101', //Ext.getCmp('queryDate').getRawValue(),
//    			'indexValue': '', //Ext.getCmp('indexValue').getRawValue(),
//    			'contentValue': '' //Ext.getCmp('contentValue').getRawValue(),
//    		},
//    		writer: {
//    			type: 'json'
//    		}
//    	},
//    	autoLoad: true,
//    	listeners: {
//    		beforeLoad: function(store) {
//    			msgTip = new Ext.LoadMask(gridChart.getEl(), {
//    				msg: '��ѯ��...'
//    			});
//    			msgTip.show();
//    			var params = {
//    					'queryDate': '20210101', //Ext.getCmp('queryDate').getRawValue(),
//    	    			'indexValue': '', //Ext.getCmp('indexValue').getRawValue(),
//    	    			'contentValue': '' //Ext.getCmp('contentValue').getRawValue(),
//    			};
//    			Ext.apply(store.proxy.extraParams, params);
//    		},
//    		load: function(store, records, successful, operation, opts) {
//    			if (successful) {
//    				//datas = '{\'success\': \'true\', \'results\': [{\'nbr\': \'1\', \'dataIndex\': \'1\', \'pty_name\': \'1\', \'lxcb_days\': \'1\', \'ljcb_days\': \'1\', \'indc_value\': \'1\'}]}';
//    			} else {
//    				Ext.MessageBox.alert('��ʾ', '���ݼ���ʧ�ܣ�');
//    			}
//    			msgTip.hide();
//    		}
//    	}
//    });
    
    
    var myStore = Ext.create('Ext.data.Store', {
        //sorters: ['name'],
    	//Overriding the model's default proxy
    	proxy: {
    	    type: 'ajax',
    	    url: 'data/data02.json',
    	    reader: {
    	        type: 'json',
    	        root: 'results'
    	    }
    	},
    	listeners: {
    		beforeLoad: function(store) {
    			var params = {
					'queryDate': '20210101', //Ext.getCmp('queryDate').getRawValue(),
	    			'zbCheckValue': '1, 1, 1', //Ext.getCmp('indexValue').getRawValue(),
	    			'textValue': '' //Ext.getCmp('contentValue').getRawValue(),
    			};
    			Ext.apply(store.proxy.extraParams, params);
    		},
    		load: function(store, records, successful, operation, opts) {
    			if (successful) {
    				//datas = '{\'success\': \'true\', \'results\': [{\'data_month\': \'1\', \'indc_value\': \'23\'}]}';
    			} else {
    				Ext.MessageBox.alert('��ʾ', '���ݼ���ʧ�ܣ�');
    			}
    		}
    	}
    });
    
    //myStore
//    var myStore = Ext.create('Ext.data.Store', {
//    	model: 'FinEntityMonVO',
//    	pageSize: 25,
//    	autoLoad: true,
//    	proxy: {
//    		type: 'ajax',
//    		timeout: 300000,
//    		url: '',
//    		reader: {
//    			type: 'json',
//    			root: 'datas',
//    			totalProperty: 'totalSize'
//    		},
//    		actionMethods: {
//    			read: 'POST'
//    		},
//    		extraParams: {
//    			'queryDate': '20210101', //Ext.getCmp('queryDate').getRawValue(),
//    			'zbCheckValue': '', //Ext.getCmp('indexValue').getRawValue(),
//    			'textValue': '' //Ext.getCmp('contentValue').getRawValue(),
//    		},
//    		writer: {
//    			type: 'json'
//    		}
//    	},
//    	listeners: {
//    		beforeLoad: function(store) {
//    			var params = {
//					'queryDate': '20210101', //Ext.getCmp('queryDate').getRawValue(),
//	    			'zbCheckValue': '1, 1, 1', //Ext.getCmp('indexValue').getRawValue(),
//	    			'textValue': '' //Ext.getCmp('contentValue').getRawValue(),
//    			};
//    			Ext.apply(store.proxy.extraParams, params);
//    		},
//    		load: function(store, records, successful, operation, opts) {
//    			if (successful) {
//    				//datas = '{\'success\': \'true\', \'results\': [{\'data_month\': \'1\', \'indc_value\': \'23\'}]}';
//    			} else {
//    				Ext.MessageBox.alert('��ʾ', '���ݼ���ʧ�ܣ�');
//    			}
//    		}
//    	}
//    });
}); 