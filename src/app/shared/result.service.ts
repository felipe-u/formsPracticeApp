import { Injectable, signal } from '@angular/core';
import { AbstractControl } from '@angular/forms';

interface Results {
  percentage: number;
  goodOnes: number;
  badOnes: number;
}

@Injectable({
  providedIn: 'root'
})
export class ResultService {
  answers;
  results = signal<Results>({ percentage: 0, goodOnes: 0, badOnes: 4});
  correctResults = ['paris', 'gabo', 'oxygen', 'einstein'];
  resultsColors: boolean[] = [];
  showModal = signal<boolean>(false);

  registerAnswers(answers: any) {
    this.answers = answers;
    this.getResults();
    this.showModal.set(true);
  }

  getResults() {
    this.resultsColors = [];
    let sum = 0;
    let index = 1;
    let finalResult = 0;
    for (const result of this.correctResults) {
      if (this.answers[`q${index.toString()}`] === result) {
        sum++;
        this.resultsColors.push(true);
      } else {
        this.resultsColors.push(false);
      }
      index++;
    }
    finalResult = (sum / this.correctResults.length) * 100;
    const badOnes = this.correctResults.length - sum;
    this.results.set({ percentage: finalResult, goodOnes: sum, badOnes: badOnes });
  }

  reset() {
    this.results.set({ percentage: 0, goodOnes: 0, badOnes: 0 });
    this.resultsColors = [];
  }
}
