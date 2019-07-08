import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajSleperComponent } from './dodaj-sleper.component';

describe('DodajSleperComponent', () => {
  let component: DodajSleperComponent;
  let fixture: ComponentFixture<DodajSleperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajSleperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajSleperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
