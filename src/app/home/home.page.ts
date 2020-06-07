import { Component } from '@angular/core';
import { Accion } from '../accion';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cambio = new Accion(true);
  desactivara: boolean = true;
  desactivare: boolean = false;

  constructor(private control: ControlService) {}

  ngOnInit(){
  	this.control.status().subscribe((data:any) => {

  		this.cambio = data.createBacnetObject;
  		console.log(data.createBacnetObject);

  		if (data.createBacnetObject) {

  			this.desactivare = true;
  			this.desactivara = false;

  		}else{

  			this.desactivara = true;
  			this.desactivare = false; 

  		}
  	}, Error => {
  		console.log("Error al obtener el estado de las luces: " + Error);
  	});
  }

  apagar(event){
  	this.cambio = false;
  	this.desactivare = false;
  	this.desactivara = true;
  	this.control.sentencia(this.cambio).subscribe(data => {
  		console.log('Luz apagada');
  	}, Error => {
  		console.log('Ha ocurrido un error al apagar las luces: ' + Error)
  	});
  }

  encender(event){
  	this.cambio = true;
  	this.desactivare = true;
  	this.desactivara = false;
  	this.control.sentencia(this.cambio).subscribe(data => {
  		console.log('Luz encendida');
  	}, Error => {
  		console.log('Ha ocurrido un error al encender las luces: ' + Error)
  	});
  }

}