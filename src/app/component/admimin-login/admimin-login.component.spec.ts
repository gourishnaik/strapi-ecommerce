import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmiminLoginComponent } from './admimin-login.component';

describe('AdmiminLoginComponent', () => {
  let component: AdmiminLoginComponent;
  let fixture: ComponentFixture<AdmiminLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmiminLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmiminLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
