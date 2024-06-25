import { Component } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.page.html',
  styleUrls: ['./my-form.page.scss'],
})
export class MyFormPage {
  formData = {
    text: '',
    radio: '',
    origin: '',
    notice: '',
    checkExpert: false,
    checkLanding: false,
    checkTurbulence: false
  };

  constructor() {}

  onSubmit() {
    console.log('Form Data:', this.formData);
    // You can handle form submission here, e.g., send the data to a server or display it
    alert(`Form submitted:
    \nIssue: ${this.formData.text}
    \nPart: ${this.formData.radio}
    \nOrigin: ${this.formData.origin}
    \nNotice: ${this.formData.notice}
    \nExpert: ${this.formData.checkExpert}
    \nLanding: ${this.formData.checkLanding}
    \nTurbulence: ${this.formData.checkTurbulence}
    `);
  }
}
