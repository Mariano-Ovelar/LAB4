import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ej01Component } from './ej01.component';

describe('Ej01Component', () => {
  let component: Ej01Component;
  let fixture: ComponentFixture<Ej01Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ej01Component]
    });
    fixture = TestBed.createComponent(Ej01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
