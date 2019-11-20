import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBodyComponent } from './home-body/home-body.component';
import { ArtistBodyComponent } from './artist-body/artist-body.component';


const routes: Routes = [
  { path: '', component: HomeBodyComponent },
  { path: 'artistBody', component: ArtistBodyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
