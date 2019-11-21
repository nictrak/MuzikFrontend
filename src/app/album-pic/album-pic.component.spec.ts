import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPicComponent } from './album-pic.component';

describe('AlbumPicComponent', () => {
  let component: AlbumPicComponent;
  let fixture: ComponentFixture<AlbumPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
