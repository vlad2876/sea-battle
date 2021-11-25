import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { AboutComponent } from './components/about/about.component';
import {RouterModule, Routes} from "@angular/router";
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FieldComponent } from './components/home/field/field.component';
import { ShipsComponent } from './components/home/ships/ships.component';
import { AimComponent } from './components/home/aim/aim.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'stats', component: StatisticsComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: NotFoundComponent},
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatisticsComponent,
    AboutComponent,
    NotFoundComponent,
    FieldComponent,
    ShipsComponent,
    AimComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
