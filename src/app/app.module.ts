import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectsComponent } from './projects/projects.component';
import { PresentationComponent } from './presentation/presentation.component';
import { OriunComponent } from './oriun/oriun.component';
import { MemophotoComponent } from './memophoto/memophoto.component';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';
import { LoadScreenComponent } from './load-screen/load-screen.component';
import { LoadScreenEndComponent } from './load-screen-end/load-screen-end.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    PresentationComponent,
    OriunComponent,
    MemophotoComponent,
    AboutComponent,
    LoadScreenComponent,
    LoadScreenEndComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
