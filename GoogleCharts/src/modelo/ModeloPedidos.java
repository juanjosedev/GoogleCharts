package modelo;

import java.util.ArrayList;

import com.google.gson.Gson;

import entidad.*;

public class ModeloPedidos {

	public ArrayList<Pedido> getAllPedidos(){
		ArrayList<Pedido> lista = new ArrayList<>();
		
		Producto pr1 = new Producto(1, "Gaseosa", 2000);
		Producto pr2 = new Producto(2, "Papitas", 1200);
		Producto pr3 = new Producto(3, "Chocolate", 1500);
		
		Pedido pe1 = new Pedido(pr2, 3);
		Pedido pe2 = new Pedido(pr3, 6);
		Pedido pe3 = new Pedido(pr1, 2);
		
		lista.add(pe1);
		lista.add(pe2);
		lista.add(pe3);
		
		return lista;
	}
	
	public String getDatos() {
		Gson gson = new Gson();
		String res = gson.toJson(getAllPedidos());
		return res;
	}
	
	public static void main(String[] args) {
		
		ModeloPedidos mp = new ModeloPedidos();
		
		System.out.println(mp.getDatos());
		
	}
	
}
