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
import { SeaAreaComponent } from './components/home/game-container/sea-area/sea-area.component';
import { ShipComponent } from './components/home/game-container/skyline-area/ship/ship.component';
import { SightComponent } from './components/home/game-container/sight-area/sight/sight.component';
import { GameContainerComponent } from './components/home/game-container/game-container.component';
import { SkylineAreaComponent } from './components/home/game-container/skyline-area/skyline-area.component';
import { SightAreaComponent } from './components/home/game-container/sight-area/sight-area.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'stats', component: StatisticsComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StatisticsComponent,
    AboutComponent,
    NotFoundComponent,
    SeaAreaComponent,
    ShipComponent,
    SightComponent,
    GameContainerComponent,
    SkylineAreaComponent,
    SightAreaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
