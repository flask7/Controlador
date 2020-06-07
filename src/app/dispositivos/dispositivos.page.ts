import { Component, OnInit } from '@angular/core';
import { ControlService } from '../control.service';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.page.html',
  styleUrls: ['./dispositivos.page.scss'],
})
export class DispositivosPage implements OnInit {

  ip: string;
  dl: boolean = true;
  dp: boolean = true;
  da: boolean = true;
  dv: boolean = true;

  constructor(private control: ControlService) { }

  ngOnInit() {
  }

  validarIp(event){
  	this.control.validIP(this.ip).subscribe((data: any) => {

  		if (data.respuesta == 'Funciona') {

  			this.dl = false;
  			this.dp = false;
  			this.da = false;
  			this.dv = false;

  		}
  	}, Error =>{
  		console.log(Error);
  		this.dl = true;
  		this.dp = true;
  		this.da = true;
  		this.dv = true;
  	});
  }

}
