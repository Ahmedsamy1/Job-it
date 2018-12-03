import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeelaterjobsComponent } from './seelaterjobs.component';

describe('SeelaterjobsComponent', () => {
  let component: SeelaterjobsComponent;
  let fixture: ComponentFixture<SeelaterjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeelaterjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeelaterjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
