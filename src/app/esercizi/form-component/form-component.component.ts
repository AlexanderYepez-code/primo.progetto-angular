import { Component } from '@angular/core';
import { FormsModule , NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponent {

  utente = { nome: '', email: '', eta: null }
  submitted = false

  onSubmit(): void {
    this.submitted = true
    console.log(this.utente)
  }

}
