import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-preferences',
  standalone: false,
  templateUrl: './preferences.component.html',
  styleUrl: './preferences.component.scss'
})
export class PreferencesComponent implements OnInit {
  preferencesForm!: FormGroup;
  isLoading = false;
  isSaving = false;
  avatarUploading = false;
  avatarError = '';
  currentAvatar = 'assets/default-avatar.png';
  
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.preferencesForm = this.formBuilder.group({
      username: ['John Doe', [Validators.required, Validators.minLength(2)]],
      email: ['john.doe@example.com', [Validators.required, Validators.email]]
    });
  }

  onSaveChanges(): void {
    if (this.preferencesForm.valid) {
      this.isSaving = true;
      // Simulate API call
      setTimeout(() => {
        console.log('Preferences saved:', this.preferencesForm.value);
        this.isSaving = false;
        // Show success message
      }, 1500);
    } else {
      this.markFormGroupTouched();
    }
  }

  onResetPassword(): void {
    this.isLoading = true;
    // Simulate password reset
    setTimeout(() => {
      console.log('Password reset email sent');
      this.isLoading = false;
      // Show success message
    }, 1000);
  }

  onAvatarUpload(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];
    
    if (file) {
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        this.avatarError = 'File size must be less than 2MB';
        return;
      }
      
      if (!file.type.startsWith('image/')) {
        this.avatarError = 'Please select a valid image file';
        return;
      }
      
      this.avatarError = '';
      this.avatarUploading = true;
      
      // Simulate upload
      setTimeout(() => {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.currentAvatar = e.target?.result as string;
          this.avatarUploading = false;
        };
        reader.readAsDataURL(file);
      }, 1500);
    }
  }

  onRemoveAvatar(): void {
    this.currentAvatar = 'assets/default-avatar.png';
    this.avatarError = '';
  }

  onLogout(): void {
    // Handle logout logic
    console.log('Logging out...');
  }

  private markFormGroupTouched(): void {
    Object.keys(this.preferencesForm.controls).forEach(key => {
      const control = this.preferencesForm.get(key);
      control?.markAsTouched();
    });
  }

  get username() { return this.preferencesForm.get('username'); }
  get email() { return this.preferencesForm.get('email'); }
}
