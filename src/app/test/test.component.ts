import { Component, inject } from '@angular/core';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ResultService } from '../shared/result.service';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  private resultService = inject(ResultService);
  colors?: boolean[] = [];
  onChecking = false;
  form = new FormGroup({
    q1: new FormControl('', {
      validators: [Validators.required]
    }),
    q2: new FormControl('', {
      validators: [Validators.required]
    }),
    q3: new FormControl('', {
      validators: [Validators.required]
    }),
    q4: new FormControl('', {
      validators: [Validators.required]
    }),
  })

  onSubmit() {
    this.onChecking = true;
    setTimeout(() => {
      console.log(this.form.value);
      this.resultService.registerAnswers(this.form.value);
      this.updateColors();
      this.onChecking = false;
    }, 2000)
    // this.form.reset();
  }

  updateColors() {
    this.colors = this.resultService.resultsColors;
  }

  onReset() {
    this.resultService.reset();
    this.form.reset();
    this.colors = [];
  }
}
