import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongBodyComponent } from './song-body.component';

describe('SongBodyComponent', () => {
  let component: SongBodyComponent;
  let fixture: ComponentFixture<SongBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
