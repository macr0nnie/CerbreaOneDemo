import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PreferencesComponent } from './components/preferences/preferences.component';
import { ClientsComponent } from './components/clients/clients.component';


const routes: Routes = [
   {path:'dashboard', component: DashboardComponent},
   {path: 'preferences',component: PreferencesComponent},
   {path: 'clients', component: ClientsComponent}, // Adjust this if ClientsModule is a module or component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 
  


}
