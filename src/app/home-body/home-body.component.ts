import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home-body',
  templateUrl: './home-body.component.html',
  styleUrls: ['./home-body.component.css']
})
export class HomeBodyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  toArtistBody(){
    this.router.navigate(['/artistBody']);
  }
}
