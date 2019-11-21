import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumBodyComponent } from './album-body.component';

describe('AlbumBodyComponent', () => {
  let component: AlbumBodyComponent;
  let fixture: ComponentFixture<AlbumBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlbumBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
