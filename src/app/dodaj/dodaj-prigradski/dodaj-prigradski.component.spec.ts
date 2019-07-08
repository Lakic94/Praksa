import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajPrigradskiComponent } from './dodaj-prigradski.component';

describe('DodajPrigradskiComponent', () => {
  let component: DodajPrigradskiComponent;
  let fixture: ComponentFixture<DodajPrigradskiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajPrigradskiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajPrigradskiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
