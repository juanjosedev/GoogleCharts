<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ page import="modelo.*" %>
<% 
	ModeloPedidos mp = new ModeloPedidos();
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<script type="text/javascript" src="js/loader.js"></script>
<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/main.js"></script>
<title>Google Charts</title>
</head>
<body>
	<div id="piechart" style="width: 900px; height: 300px;"></div>
	<button id="grafica">MOSTRAR GRÁFICA</button>
</body>
</html>