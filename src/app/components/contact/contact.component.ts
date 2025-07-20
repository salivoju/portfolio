import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmailService } from '../../service/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm!: FormGroup;
  isMailSending: boolean = false;
  uploadMessage: string = '';
  isError: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(3)]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    if (this.contactForm && this.contactForm.valid) {
      this.isMailSending = true;
      this.isError = false;
      this.uploadMessage = '';

      // Prepare form data
      const formData = {
        name: this.contactForm.value.name.trim(),
        email: this.contactForm.value.email.trim(),
        subject: this.contactForm.value.subject.trim(),
        message: this.contactForm.value.message.trim()
      };

      this.emailService.sebdEmail(formData).subscribe({
        next: (response) => {
          this.uploadMessage = response.message || 'Thanks for reaching out! I\'ll get back to you soon.';
          this.isError = false;
          this.resetForm();
        },
        error: (error) => {
          console.error('Email sending error:', error);
          this.isError = true;
          this.uploadMessage = this.getErrorMessage(error);
        },
        complete: () => {
          this.isMailSending = false;
          this.autoHideMessage();
        }
      });
    } else {
      this.markFormGroupTouched();
    }
  }

  private resetForm(): void {
    this.contactForm.reset();
    // Reset form validation states
    Object.keys(this.contactForm.controls).forEach(key => {
      this.contactForm.get(key)?.setErrors(null);
    });
  }

  private markFormGroupTouched(): void {
    Object.keys(this.contactForm.controls).forEach(key => {
      const control = this.contactForm.get(key);
      control?.markAsTouched();
    });
  }

  private getErrorMessage(error: any): string {
    if (error?.error?.message) {
      return error.error.message;
    }
    if (error?.message) {
      return error.message;
    }
    return 'Something went wrong. Please try again or contact me directly via email.';
  }

  private autoHideMessage(): void {
    setTimeout(() => {
      this.uploadMessage = '';
      this.isError = false;
    }, 6000);
  }

  // Utility getters for template
  get nameField() { return this.contactForm.get('name'); }
  get emailField() { return this.contactForm.get('email'); }
  get subjectField() { return this.contactForm.get('subject'); }
  get messageField() { return this.contactForm.get('message'); }

  // Check if specific field has error
  hasFieldError(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field?.invalid && field?.touched);
  }

  // Get specific field error message
  getFieldError(fieldName: string): string {
    const field = this.contactForm.get(fieldName);
    if (field?.errors) {
      if (field.errors['required']) {
        return `${this.getFieldDisplayName(fieldName)} is required.`;
      }
      if (field.errors['email']) {
        return 'Please enter a valid email address.';
      }
      if (field.errors['minlength']) {
        const minLength = field.errors['minlength'].requiredLength;
        return `${this.getFieldDisplayName(fieldName)} must be at least ${minLength} characters long.`;
      }
    }
    return '';
  }

  private getFieldDisplayName(fieldName: string): string {
    const displayNames: { [key: string]: string } = {
      'name': 'Name',
      'email': 'Email',
      'subject': 'Subject',
      'message': 'Message'
    };
    return displayNames[fieldName] || fieldName;
  }
}