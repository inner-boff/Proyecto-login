import { Injectable } from '@angular/core';
import { PhotoLibrary } from '@awesome-cordova-plugins/photo-library/ngx';

@Injectable({
  providedIn: 'root'
})
export class GaleriaFotosService {

  constructor(
    private photoLibrary: PhotoLibrary
  ) {

    this.photoLibrary.requestAuthorization().then(() => {

      this.photoLibrary.getLibrary().subscribe({
        next: library => {
          library.forEach(function(libraryItem) {
            console.log(libraryItem.id); // La ID de la foto
            console.log(libraryItem.photoURL); // La URL de la imagen, será diferente según la plataforma.
            console.log(libraryItem.thumbnailURL); // La URL de la miniatura, será diferente según la plataforma.
            console.log(libraryItem.fileName); //El nombre de la imagen seleccionada.
            console.log(libraryItem.width); //El ancho
            console.log(libraryItem.height); //El alto
            console.log(libraryItem.creationDate); //La fecha en la que se crea el archivo.
            console.log(libraryItem.latitude); //En caso de que esté geolocalizado, la latitud.
            console.log(libraryItem.longitude); //Lo mismo que la anterior, pero para la longitud.
            console.log(libraryItem.albumIds);    // Un array de IDS de álbumes a los que pertenece esta imagen
          });
        },

        error: err => { console.log('No hay fotos'); },
        complete: () => { console.log('Se ha terminado la selección'); }
      });
    })
    .catch(err => console.log('No hay permisos para realizar esta acción'));
   }

  
   getLibreriaFotos(){
    console.log("llamando getLibrary");
    

    //this.photoLibrary.getLibrary();
    
  }  
  
}
