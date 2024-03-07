import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/header/header.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { ClientsComponent } from './pages/clients/clients.component';
import { LivreursComponent } from './pages/livreurs/livreurs.component';
import { VendeursComponent } from './pages/vendeurs/vendeurs.component';
import { InventionComponent } from './pages/invention/invention.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

 import { FormsModule } from '@angular/forms';
import { CalindarComponent } from './pages/calindar/calindar.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashbordComponent,
    ClientsComponent,
    LivreursComponent,
    VendeursComponent,
    InventionComponent,
    CalindarComponent
  ],
  imports: [
    BrowserModule,MatButtonModule,
    AppRoutingModule,FormsModule,MatNativeDateModule,MatIconModule,
    BrowserAnimationsModule,MatDatepickerModule,MatFormFieldModule,MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
