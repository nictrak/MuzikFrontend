import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistPicComponent } from './artist-pic.component';

describe('ArtistPicComponent', () => {
  let component: ArtistPicComponent;
  let fixture: ComponentFixture<ArtistPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
