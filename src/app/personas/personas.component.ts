import { Component, OnInit } from '@angular/core';
import { PersonasProviderService } from '../providers/personas-provider.service';
import { Personas } from '../models/Personas';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  public personas: Personas[] = [
    {
      id: 1,
      Nombre: '',
      Apellido: '',
      Cedula: '',
      Email: '',
      Edad: 18
    }
  ];

  constructor(private personasProviderService: PersonasProviderService) {}

  ngOnInit() {
    // Call getPersonas() when the component is initialized
    this.getPersonas();
  }

  getPersonas() {
    this.personasProviderService.getallPersonas().subscribe(
      (data: Personas[]) => {
        this.personas = data;
        console.log('Personas:', this.personas);
      },
      error => {
        console.log('Error getPersonas', error);
      }
    );
  }
}
