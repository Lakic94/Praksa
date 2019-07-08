import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajCisternaComponent } from './dodaj-cisterna.component';

describe('DodajCisternaComponent', () => {
  let component: DodajCisternaComponent;
  let fixture: ComponentFixture<DodajCisternaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajCisternaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajCisternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
