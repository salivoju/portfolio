import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  constructor() {
    // Initialize EmailJS with your public key
    emailjs.init(environment.emailjs.publicKey);
  }

  sendEmail(data: any): Observable<any> {
    return new Observable(observer => {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        subject: data.subject,
        message: data.message,
        to_name: 'Sukesh', // Your name
        reply_to: data.email
      };

      emailjs.send(
        environment.emailjs.serviceID, 
        environment.emailjs.templateID, 
        templateParams
      ).then((response: EmailJSResponseStatus) => {
          console.log('Email sent successfully!', response.status, response.text);
          observer.next({ 
            message: 'Thanks for reaching out! I\'ll get back to you soon.' 
          });
          observer.complete();
        })
        .catch((error) => {
          console.error('Email sending failed:', error);
          observer.error({
            message: 'Something went wrong. Please try again or contact me directly via email.'
          });
        });
    });
  }
}