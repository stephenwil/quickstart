import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { routing } from './routes/app.routing';
import { AppComponent }  from './app.component';
import { HeroComponent } from './components/hero.component';
import { HeroDetailComponent } from './components/hero-detail.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { HeroService} from './services/hero.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
  ],
  declarations: [
    AppComponent,
    HeroComponent,
    HeroDetailComponent,
    DashboardComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }
