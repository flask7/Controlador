import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Accion } from './accion';
import { Validacion } from './validacion';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  ip: string;

  constructor(private http: HttpClient) { }

  status(){
  	const url = 'http://localhost:5000/api/rest/v1/protocols/nlight/settings/features/relayState';
  	return this.http.get(url);
  }

  sentencia(accion: object): Observable<any>{
  	const url = 'http://localhost:5000/api/rest/v1/protocols/nlight/settings/features/relayState';
  	const headers = {'Content-type': 'application/json'};
  	const json = JSON.stringify(accion);
  	return this.http.post(url, json, {'headers': headers});
  }

  validar(validacion: object): Observable<any>{
    const url = 'http://localhost:5000/api/rest/v1/protocols/nlight/settings/features/relayState';
    const headers = {
      'Content-Type': 'text/html;charset=ISO-8859-1',
      'Set-Cookie': 'ECLYPSERESTSESSIONID=1jqtspqfcpqh1yn8rm0hv8ddg;Path=/',
      'WWW-Authenticate': 'basic realm="Radius"',
      'Cache-Control': 'must-revalidate,no-cache,no-store',
      'Content-Length': '1437',
      'Server': 'Jetty(7.x.y-SNAPSHOT)'
    };
    const json = JSON.stringify(validacion);
    return this.http.post(url, json, {'headers': headers});
  }

  validIP(ip): Observable<any>{
    this.ip = ip;
    const url = 'http://' + ip + '';
    return this.http.get(url);
  }

  lamparas(){
    const url = 'http://' + this.ip + '/api/rest/v1/protocols/nlight/devices';
    return this.http.get(url);
  }

}