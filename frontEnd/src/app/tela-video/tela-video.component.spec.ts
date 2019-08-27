import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaVideoComponent } from './tela-video.component';

describe('TelaVideoComponent', () => {
  let component: TelaVideoComponent;
  let fixture: ComponentFixture<TelaVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelaVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelaVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
