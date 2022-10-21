import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
<<<<<<< HEAD






=======
import { Proveedor1Service } from '../services/proveedor1.service';
>>>>>>> 137cd12e23453b99a926184f65f9e4cc6cc48c31

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  profile = null;

  constructor(
   
    private authService: AuthService,
    private router: Router,
<<<<<<< HEAD
    
    
=======
    public proveedor: Proveedor1Service
>>>>>>> 137cd12e23453b99a926184f65f9e4cc6cc48c31
  ) {}

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true })
  }

  async changeImage() {}

  option = {
    initialSlide: 1,
    speed: 400,
    autoplay:true,
  }

  async navegarAClubesJazz() {
    console.log('redirigiendo a clubes de jazz')
    this.router.navigateByUrl('clubes-jazz', { replaceUrl: true });
<<<<<<< HEAD
 }
 
=======
  }

  async navegarAListado(opcion: string){
    console.log("Dio click en " + opcion);
    this.proveedor.opcion = opcion;
    this.router.navigateByUrl('lista-lugar', { replaceUrl: true });
  }  
>>>>>>> 137cd12e23453b99a926184f65f9e4cc6cc48c31
}
