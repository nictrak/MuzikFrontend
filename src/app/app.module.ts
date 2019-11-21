import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeBodyComponent } from './home-body/home-body.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistBodyComponent } from './artist-body/artist-body.component';
import { ArtistMenuComponent } from './artist-menu/artist-menu.component';
import { ArtistResultComponent } from './artist-result/artist-result.component';
import { SongComponent } from './song-menu/song.component';
import { SongBodyComponent } from './song-body/song-body.component';
import { SongResultComponent } from './song-result/song-result.component';
import { AlbumBodyComponent } from './album-body/album-body.component';
import { AlbumMenuComponent } from './album-menu/album-menu.component';
import { AlbumResultComponent } from './album-result/album-result.component';
import { ArtistInfoComponent } from './artist-info/artist-info.component';
import { ArtistPicComponent } from './artist-pic/artist-pic.component';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { SongInfoComponent } from './song-info/song-info.component';
import { SongPicComponent } from './song-pic/song-pic.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';
import { AlbumPicComponent } from './album-pic/album-pic.component';
import { AlbumInfoComponent } from './album-info/album-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeBodyComponent,
    ArtistComponent,
    ArtistBodyComponent,
    ArtistMenuComponent,
    ArtistResultComponent,
    SongComponent,
    SongBodyComponent,
    SongResultComponent,
    AlbumBodyComponent,
    AlbumMenuComponent,
    AlbumResultComponent,
    ArtistInfoComponent,
    ArtistPicComponent,
    ArtistDetailComponent,
    SongInfoComponent,
    SongPicComponent,
    SongDetailComponent,
    AlbumDetailComponent,
    AlbumPicComponent,
    AlbumInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
