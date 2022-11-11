import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Favorito } from '../models/favorito.model';
import { AuthService } from '../services/auth.service';
import { FavoritosService } from '../services/favoritos.service';
import { GaleriaFotosService } from '../services/galeria-fotos.service';
import { Proveedor1Service } from '../services/proveedor1.service';

@Component({
  selector: 'app-favorito',
  templateUrl: './favorito.page.html',
  styleUrls: ['./favorito.page.scss'],
})
export class FavoritoPage implements OnInit {

  public listaFav: Favorito[];
  public nuevoListado: Favorito[];
  //galleryType = "regular"

  constructor(
    public favoritos: FavoritosService,
    public alertController: AlertController,
    public loadingController: LoadingController,
    public router: Router,
    public proveedor: Proveedor1Service,
    public galeriaFotos: GaleriaFotosService,
    public authService: AuthService
  ) { }

  ngOnInit() {
    this.listaFav = this.favoritos.favoritosDelUsuario

    //let listaEditar = this.listas.find((listaItem)=> listaItem.id == lista.id);

    //let nuevoListado = this.listaFav.filter((listaItem)=> listaItem.email === this.authService.email);
    console.log(this.authService.email);

    this.nuevoListado = this.listaFav.filter((listaItem)=> listaItem.email === this.authService.email);
  }

  async eliminarLista(listaItem: Favorito) {
    const loading = await this.loadingController.create();
    await loading.present();
    
    const user = await this.favoritos.eliminarLista(listaItem);
    await loading.dismiss();
    this.showAlert('Favorito eliminado', 'xx');
    console.log("Eliminar lista:", listaItem);
   
  }

  async showAlert(header, message) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }  

  doRefresh(event) {
    this.listaFav = null; // this is replacement of splice
    this.ngOnInit(); // 
    setTimeout(() => {
      //this.router.navigate(['/favorito']);
      event.target.complete();
  }, 2000);  
  }

  async verLugar(id: string, nombre: string){
    console.log("Dio click en " + id);
    this.proveedor.idLugar = id;
    this.proveedor.nombreLugar = nombre;
    this.router.navigateByUrl('lugar', { replaceUrl: true });
  }  

  abrirGaleriaDelDispositivo(){
    console.log("abriendo galería del dispositivo");
    this.galeriaFotos.getLibreriaFotos();
    
  }  
}
