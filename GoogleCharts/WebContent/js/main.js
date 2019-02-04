$(document).ready(function(){
	google.charts.load("current", {packages:["corechart"]});
	$("#grafica").click(function(){
		
		$.post("pedidos", "grafica=true", function(res, est, jqXHR){
			
			var datos = JSON.parse(res);
			var arreglo = new Array();
			arreglo.push(new Array('Producto', 'Cantidad'));
			for (var i = 0; i < datos.length; i++) {
				arreglo.push(new Array(datos[i].producto.nombre, datos[i].cantidad));
				//console.log(datos[i].producto.nombre+" "+datos[i].cantidad);
			}
			google.charts.setOnLoadCallback(mostrarGrafica);
			function mostrarGrafica(){
				
				var data = google.visualization.arrayToDataTable(arreglo);
				
				var options = {
						title: 'Compras',
						backgroundColor: {fill:"#ccc"},
						//is3D: true,
						pieHole: .1
				};
				
				var grafica_mi_rutina = new google.visualization.PieChart(document.getElementById('piechart'));
				
				grafica_mi_rutina.draw(data, options);
				
			}
		});
	});
	
	
});