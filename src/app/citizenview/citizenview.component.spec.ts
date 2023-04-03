import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitizenviewComponent } from './citizenview.component';

describe('CitizenviewComponent', () => {
  let component: CitizenviewComponent;
  let fixture: ComponentFixture<CitizenviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitizenviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CitizenviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
