import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { PersonasComponent } from './personas/personas.component';


const routes: Routes = [
  { path: 'portafolio', component: PortafolioComponent},
  { path: 'personas', component: PersonasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
