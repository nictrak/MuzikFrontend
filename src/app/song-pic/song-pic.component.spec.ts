import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SongPicComponent } from './song-pic.component';

describe('SongPicComponent', () => {
  let component: SongPicComponent;
  let fixture: ComponentFixture<SongPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SongPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SongPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
