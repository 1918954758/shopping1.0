(function() {
	Ext.onReady(function(){    
	    Ext.create('Ext.Button', {
	    	text: 'click me',
	    	renderTo: Ext.getBody(),
	    	handler: function() {
	    		alert(basePath);
	    		window.open(basePath + "/app/openWindow/newOpen.jsp", "_blank", "scrollbars=yes,resizable=1,modal=false,alwaysRaised=yes");
	    		//alert(win);
	    	}
//	    	  window.open �����´��ڵ���� 
//			����'page.html' �������ڵ��ļ����� 
//			����'newwindow' �������ڵ����֣������ļ��������Ǳ��룬���ÿ�''���棻 
//			����height=100 ���ڸ߶ȣ� 
//			����width=400 ���ڿ�ȣ� 
//			����top=0 ���ھ�����Ļ�Ϸ�������ֵ�� 
//			����left=0 ���ھ�����Ļ��������ֵ�� 
//			����toolbar=no �Ƿ���ʾ��������yesΪ��ʾ�� 
//			����menubar��scrollbars ��ʾ�˵����͹������� 
//			����resizable=no �Ƿ�����ı䴰�ڴ�С��yesΪ���� 
//			����location=no �Ƿ���ʾ��ַ����yesΪ���� 
//			����status=no �Ƿ���ʾ״̬���ڵ���Ϣ��ͨ�����ļ��Ѿ��򿪣���yesΪ����
	    })
	}); 
	
})();