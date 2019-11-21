import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-artist-result',
  templateUrl: './artist-result.component.html',
  styleUrls: ['./artist-result.component.css']
})
export class ArtistResultComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  toArtistInfo(){
    this.router.navigate(['/artistInfo']);
  }
}
