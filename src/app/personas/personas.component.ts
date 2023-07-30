import { Component } from '@angular/core';
import { PersonasProviderService } from '../providers/personas-provider.service';
import { Personas } from '../models/Personas';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent {
  public personas: Personas[] =[
    {
      id: 1,
      Nombre: '',
      Apellido: '',
      Cédula: '',
      Email: '',
      Edad: 18
    }
  ];
  constructor(
    private PersonasProviderService: PersonasProviderService
  ){};

  getPersonas() {
    this.PersonasProviderService.getallPersonas().subscribe(
      (data: Personas[]) => {
        this.personas = data;
        console.log('Mariooooooo'+this.personas);
      },
      error => {
        console.log('error getPersonas', error);
      }
    )
  } 
}
