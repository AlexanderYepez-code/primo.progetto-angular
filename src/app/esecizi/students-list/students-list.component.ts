import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HighlightAbsentDirective } from './student-list/highlight-absent.directive';

@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [CommonModule, HighlightAbsentDirective ],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.css'
})
export class StudentsListComponent {
    students = [
    { name: 'Giulia', grade: 8, present: true },
    { name: 'Marco', grade: 5, present: false },
    { name: 'Sofia', grade: 10, present: true },
    { name: 'Luca', grade: 6, present: true },
    { name: 'Anna', grade: 4, present: false },
  ];

  getGradeCategory(grade: number): string {
    if (grade >= 9) return 'Ottimo';
    if (grade >= 7) return 'Buono';
    if (grade >= 6) return 'Sufficiente';
    return 'Insufficiente';
  }

}
