import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajKabrioletComponent } from './dodaj-kabriolet.component';

describe('DodajKabrioletComponent', () => {
  let component: DodajKabrioletComponent;
  let fixture: ComponentFixture<DodajKabrioletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajKabrioletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajKabrioletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
