<%
String path = request.getContextPath();
String basePath = request.getScheme() + "://" + request.getServerName() + ":" + request.getServerPort() + path;
%>
<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<base href="<%=basePath%>">
	<meta http-equiv="Content-Type" content="text/html; charset=utf8">
	<title>Insert title here</title>

	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/ext-4.2.1.883/resources/css/ext-all.css">
    <script type="text/javascript" src="<%=request.getContextPath()%>/ext-4.2.1.883/bootstrap.js"></script>
    <script type="text/javascript" src="<%=request.getContextPath()%>/ext-4.2.1.883/locale/ext-lang-zh_CN.js"></script>
    
    <script type="text/javascript" src="<%=request.getContextPath()%>/ext-4.2.1.883/examples/shared/options-toolbar.js"></script>
    <!-- </x-bootstrap> -->
</head>
<body>
	<script>
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
	        			   title: "��"//,
	        			   //items: [gridPanel_11]
	    			   },{
	    				   width: 500,    
	        			   height: 250,     
	        			   title: "��"//,
	        			   //items: [gridChart_21]
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
	        			   title: "��"//,
	        			   //items: [gridChart_12]
	    			   },{
	    				   width: 500,    
	        			   height: 250,    
	        			   title: "��"//,
	        			   //items: [gridChart_22]
    			   }]
	    	   }]   
	      }); 
	</script>
</body>
</html>