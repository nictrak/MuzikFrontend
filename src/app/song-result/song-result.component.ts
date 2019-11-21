import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-song-result',
  templateUrl: './song-result.component.html',
  styleUrls: ['./song-result.component.css']
})
export class SongResultComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  toSongInfo(){
    this.router.navigate(['/songInfo']);
  }
}
