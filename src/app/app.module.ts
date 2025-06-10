import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { PeopleTableComponent } from './components/people-table/people-table.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { SamplekpiComponent } from './components/samplekpi/samplekpi.component';
import { CommunicationTableComponent } from './components/communication-table/communication-table.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PreferencesComponent } from './components/preferences/preferences.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PeopleTableComponent,
    NavigationComponent,
    SamplekpiComponent,
    CommunicationTableComponent,
    ClientsComponent,
    PreferencesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
