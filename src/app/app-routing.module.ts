import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeBodyComponent } from './home-body/home-body.component';
import { ArtistBodyComponent } from './artist-body/artist-body.component';
import { SongBodyComponent } from './song-body/song-body.component';
import { AlbumBodyComponent } from './album-body/album-body.component';
import { ArtistInfoComponent } from './artist-info/artist-info.component';
import { SongInfoComponent } from './song-info/song-info.component';
import { AlbumInfoComponent } from './album-info/album-info.component';


const routes: Routes = [
  { path: '', component: HomeBodyComponent },
  { path: 'artistBody', component: ArtistBodyComponent },
  { path: 'songBody', component: SongBodyComponent},
  { path: 'songInfo', component: SongInfoComponent},
  { path: 'artistInfo', component: ArtistInfoComponent},
  { path: 'albumInfo', component: AlbumInfoComponent},
  { path: 'albumBody', component: AlbumBodyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
