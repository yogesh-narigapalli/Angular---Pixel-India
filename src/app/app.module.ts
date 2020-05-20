import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MapComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'Key'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
