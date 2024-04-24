import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSignupheaderComponent } from './login-signupheader.component';

describe('LoginSignupheaderComponent', () => {
  let component: LoginSignupheaderComponent;
  let fixture: ComponentFixture<LoginSignupheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginSignupheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSignupheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
