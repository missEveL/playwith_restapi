import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NasaComponent } from './nasa/nasa.component';
import { GiphyComponent } from './giphy/giphy.component';
import { SetlistfmComponent } from './setlistfm/setlistfm.component';


const routes: Routes = [
  {path:  '', pathMatch:  'full', redirectTo:  'home'},
  {path: 'home', component: HomeComponent},
  {path: 'nasa', component: NasaComponent},
  {path: 'giphy', component: GiphyComponent},
  {path: 'setlistfm', component: SetlistfmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
