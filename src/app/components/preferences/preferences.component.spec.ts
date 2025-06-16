import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { PreferencesComponent } from './preferences.component';

describe('PreferencesComponent', () => {
  let component: PreferencesComponent;
  let fixture: ComponentFixture<PreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreferencesComponent],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with default values', () => {
    expect(component.preferencesForm.get('username')?.value).toBe('John Doe');
    expect(component.preferencesForm.get('email')?.value).toBe('john.doe@example.com');
  });

  it('should validate required fields', () => {
    const usernameControl = component.preferencesForm.get('username');
    const emailControl = component.preferencesForm.get('email');
    
    usernameControl?.setValue('');
    emailControl?.setValue('');
    
    expect(usernameControl?.hasError('required')).toBeTruthy();
    expect(emailControl?.hasError('required')).toBeTruthy();
  });
});
