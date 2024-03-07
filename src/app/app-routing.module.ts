import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { LivreursComponent } from './pages/livreurs/livreurs.component';
import { VendeursComponent } from './pages/vendeurs/vendeurs.component';

const routes: Routes = [
  {path:"index", component:DashbordComponent},
  {path:"Client",component:ClientsComponent},
  {path:"Livreurs", component:LivreursComponent},
  {path:"vendeur", component:VendeursComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
