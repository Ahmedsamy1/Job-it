import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlljobsComponent } from './alljobs.component';

describe('AlljobsComponent', () => {
  let component: AlljobsComponent;
  let fixture: ComponentFixture<AlljobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlljobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlljobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
