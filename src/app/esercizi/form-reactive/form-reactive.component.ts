import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form-reactive.component.html',
  styleUrl: './form-reactive.component.css'
})
export class FormReactiveComponent {
  contactForm = new FormGroup({
    oggetto : new FormControl('', [Validators.required]),
    messaggio: new FormControl('', [Validators.required, Validators.minLength(10)]),
    urgenza: new FormControl('', [Validators.required])
  })

  submitted = false

  onSubmit():void {
    this.submitted = true
    console.log(this.contactForm.value)
  }


}
