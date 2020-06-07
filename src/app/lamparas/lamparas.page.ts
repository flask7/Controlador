import { Component, OnInit } from '@angular/core';
import { ControlService } from '../control.service'

@Component({
  selector: 'app-lamparas',
  templateUrl: './lamparas.page.html',
  styleUrls: ['./lamparas.page.scss'],
})
export class LamparasPage implements OnInit {

  lamparas: any = [];

  constructor(private control: ControlService) { }

  ngOnInit() {
  	this.control.lamparas().subscribe((data:any) => {
  		console.log(data);
  		this.lamparas = data;
  	}, Error => {
  		console.log('Error al obtener los dispositivos: ' + Error);
  	});
  }

}
