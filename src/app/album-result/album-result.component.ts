import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album-result',
  templateUrl: './album-result.component.html',
  styleUrls: ['./album-result.component.css']
})
export class AlbumResultComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  toAlbumInfo(){
    this.router.navigate(['/albumInfo']);
  }
}
