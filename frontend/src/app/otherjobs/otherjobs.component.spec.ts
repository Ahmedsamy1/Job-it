import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherjobsComponent } from './otherjobs.component';

describe('OtherjobsComponent', () => {
  let component: OtherjobsComponent;
  let fixture: ComponentFixture<OtherjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
