import { Component, OnInit } from '@angular/core';
import { Validacion } from '../validacion';
import { ControlService } from '../control.service';
import { Router } from  '@angular/router';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {

  usuario: string;
  password: string;

  constructor(private control: ControlService, private router: Router) { }

  ngOnInit() {
  }

  validacion(){
  	const b64user = btoa(this.usuario);
  	const b64pass = btoa(this.password);
  	localStorage.setItem(b64user, b64pass);
  	const valid = new Validacion(b64user, b64pass);
  	this.control.validar(valid).subscribe((data: any) => {
  		console.log(data);
      this.router.navigateByUrl('/dispositivos');
  	}, Error => {
  		console.log(Error);
  	});

  }

}
