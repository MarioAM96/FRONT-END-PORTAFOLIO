import { Injectable } from '@angular/core';
import {Personas} from '../../app/models/Personas'
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonasProviderService {

  constructor(
    private http: HttpClient,
  ) { }

  public getallPersonas() {
    return this.http.get<Personas[]>('http://192.168.0.113:8000' + '/usuarios/personas');
  }
}

