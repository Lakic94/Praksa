import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajGradskiComponent } from './dodaj-gradski.component';

describe('DodajGradskiComponent', () => {
  let component: DodajGradskiComponent;
  let fixture: ComponentFixture<DodajGradskiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajGradskiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajGradskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
