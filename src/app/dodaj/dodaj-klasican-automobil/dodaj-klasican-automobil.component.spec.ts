import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajKlasicanAutomobilComponent } from './dodaj-klasican-automobil.component';

describe('DodajKlasicanAutomobilComponent', () => {
  let component: DodajKlasicanAutomobilComponent;
  let fixture: ComponentFixture<DodajKlasicanAutomobilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajKlasicanAutomobilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajKlasicanAutomobilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
