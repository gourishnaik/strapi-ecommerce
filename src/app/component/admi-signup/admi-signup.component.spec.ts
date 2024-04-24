import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiSignupComponent } from './admi-signup.component';

describe('AdmiSignupComponent', () => {
  let component: AdmiSignupComponent;
  let fixture: ComponentFixture<AdmiSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmiSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
