import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Proveedor1Service {

<<<<<<< HEAD
=======
  public idLugar: string;
  public nombreLugar: string;
  public opcion: string;

>>>>>>> 137cd12e23453b99a926184f65f9e4cc6cc48c31
  constructor(
    public http: HttpClient
  ) {
    console.log('Hola Proveedor1');
  }
  obtenerDatos(){
  //Lo de abajo devuelve todas las categorías
  console.log('haciendo GET de la API')
<<<<<<< HEAD
  return this.http.get('https://epok.buenosaires.gob.ar/getCategorias')
=======
  //return this.http.get('https://epok.buenosaires.gob.ar/getCategorias')
>>>>>>> 137cd12e23453b99a926184f65f9e4cc6cc48c31



    //Lo de abajo devuelve clubes de jazz
<<<<<<< HEAD
    //return this.http.get('https://epok.buenosaires.gob.ar/buscar/?texto=Clubes%20de%20Jazz');
=======
    return this.http.get('https://epok.buenosaires.gob.ar/buscar/?texto=Clubes%20de%20Jazz');
  }

  obtenerDatos2(){
    //Lo de abajo devuelve todas las categorías
    console.log('haciendo GET de la API opcion')
    //return this.http.get('https://epok.buenosaires.gob.ar/getCategorias')
  
    return this.http.get('https://epok.buenosaires.gob.ar/buscar/?texto=' + this.opcion);
  }

  obtenerLugar(id: string){
    //Se obtiene los datos del lugar
    console.log('haciendo GET de la API Lugar');
    
    return this.http.get('https://epok.buenosaires.gob.ar/getObjectContent?id=' + id);
>>>>>>> 137cd12e23453b99a926184f65f9e4cc6cc48c31
  }

}
