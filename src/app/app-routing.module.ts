import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MemophotoComponent } from './memophoto/memophoto.component';
import { OriunComponent } from './oriun/oriun.component';
import { PresentationComponent } from './presentation/presentation.component';
import { ProjectsComponent } from './projects/projects.component';
import { RasskingComponent } from './rassking/rassking.component';

const routes: Routes = [
  { path: '', component: PresentationComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/oriun', component: OriunComponent },
  { path: 'projects/memophoto', component: MemophotoComponent },
  { path: 'projects/about', component: AboutComponent },
  { path: 'projects/rasskingball', component: RasskingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
