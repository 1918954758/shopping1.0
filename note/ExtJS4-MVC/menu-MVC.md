# һ������һ��viewport���
## 1. �Զ������ͼ������̳� Ext.container.Viewport���Ҳ��õĲ�����border
## 2. border���ֵ��м䲿�֣�region: 'center'��Ϊtabpanel
## 3. border���ֵ���߲��֣�region: 'west'��������ŵ���������壨xtype: 'menutree', menutree�̳�treepanel�� ��һ������menutree��
```js
Ext.define('menu.view.Viewport', {
	extend: 'Ext.container.Viewport',
	//���ַ�ʽ
	layout: 'border',
	alias: 'widget.viewport',
	items: [{
		title: 'ExtJS����',
		collapisble: true,
		region: 'north',
		height: 100,
		html: '<br><center><font size=5>MVCģʽ��ʵ��ExtJS����</font><br><font size=2>ԭ����Դ��ITLee����</font></center>'
	}, {
		title: '���ܲ˵�',
		region: 'west',
		split: true,
		collapisble: true,
		items: [{
			xtype: 'menutree'
		}]
	}, {
		region: 'center',
		id: 'mainContent',
		xtype: 'tabpanel',
		layout: 'fit',
		collapisble: true
	}]
})
```

# ��������һ��treepanel���
## 1. �Զ����MenuTree�˵������������̳�treepanel
## 2. store: 'MenuStore'ָ���˲˵�������ݼ�����һ���ᶨ�� ��� MenuStore ���ݼ�
```js
Ext.define('menu.view.MenuTree', {
	extend: 'Ext.tree.Panel',
	alias: 'widget.menutree',
	border: false,
	//�涨ê���ӵ�ַ����ʾ����
	hrefTarget: 'mainContent',
	//�Ƿ���ʾ���ڵ�
	rootVisible: false,
	//���ݼ�
	store: 'MenuStore'
})
```

# ��������һ��store��������ݼ���
## 1. �����store������̳� Ext.data.TreeStore
## 2. ���� autoLoad: true�� �Ա��Զ���������
## 3. ���� proxy ����Զ�����ݣ� �����ַΪ data/data.json, ��һ���ʹ�������ļ�
```js
Ext.define('menu.store.MenuStore', {
	extend: 'Ext.data.TreeStore',
	autoLoad: true,
	proxy: {
		type: 'ajax',
		url: 'menu/data/data.json',
		reader: {
			type: 'json',
			root: 'children'
		}
	}
})
```

# �ġ����� json ���� ���ڴ��� ���ͽṹ

# �塢���� Main�����������ڹ�����Щ����
## 1. ��֮ǰ�����е����ע�ᵽMain��������
## 2. ��Main�������У�����Щ��������Ӧ�ļ������Լ�����
```js
Ext.define('menu.controller.Main', {
	extend: 'Ext.app.Controller',
	//��view��ͼ��ӵ�������
	views: ['Viewport', 'MenuTree'],
	//�����ݼ���ӵ�������
	stores: ['MenuStore'],
	
	//��ʼ����������launch����֮ǰִ��
	init: function() {
		this.control({
			'menutree': {
				itemdblclick: this.changePage
			}
		});
	},
	
	//changePage ����
	changePage: function(view, rec, item, index, e) {
		var title = rec.get('text');
		var leaf = rec.get('leaf');
		var tabPanel = Ext.getCmp('mainContent');
		//�ӽڵ���ܴ򿪣����ڵ㲻������Ӧ
		if (leaf == false) {
			return;
		}
		//��titleֵ����tab��id����ʱ������ ʹtab active�������½�tab
		var newTab = tabPanel.getChildByElement(tilte);
		if (newTab == null) {
			tabPanel.add({
				id: title,
				title: title,
				html: '��ǰҳ���� ' + title + '<br/><br/>',
				closable: true
			});
		}
		tabPanel.setActiveTab(title);
	}
})
```

# ��������app.js�ļ�
## 1. ��Main������ע�ᵽӦ�ó�����
## 2. autoCreateViewport: true �Զ����� �����viewport���
```js
Ext.application({
	name: 'menu',
	appFolder: 'menu/app',
	/*launch: function() {
		Ext.create('Ext.container.Viewport', {
			layout: 'border',
			items: [{
				xtype: 'viewport'
			}, {
				xtype: 'menutree'
			}]
		})
	},*/
	controllers: ['Main'],
	autoCreateViewport: true
})
```

# �ߡ�����index.jsp
```js
<%
String path = request.getContextPath();
String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path;
%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<base href="<%=basePath%>">
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>Insert title here</title>
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/menu/ext-4.0/resources/css/ext-all.css">
    <script type="text/javascript" src="<%=request.getContextPath()%>/menu/ext-4.0/ext-all-debug.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/menu/app.js"></script>
</head>
<body>
	<%-- <button id="zi" value="Show" onclick="threeFn()">��ť</button>
	<script type="text/javascript">
		function threeFn() {
			var a = '<%=request.getContextPath()%>';
			alert('a'+a);
		}
	</script> --%>
</body>
</html>
```
