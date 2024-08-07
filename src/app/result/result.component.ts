import { Component, inject } from '@angular/core';
import { ResultService } from '../shared/result.service';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [],
  templateUrl: './result.component.html',
  styleUrl: './result.component.css'
})
export class ResultComponent {
  private resultService = inject(ResultService);
  results = this.resultService.results;

  closeModal() {
    this.resultService.showModal.set(false);
  }
}
