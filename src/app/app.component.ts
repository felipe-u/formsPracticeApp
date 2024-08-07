import { Component, inject } from '@angular/core';
import { HeaderComponent } from "./header/header.component";
import { TestComponent } from "./test/test.component";
import { ResultComponent } from "./result/result.component";
import { ResultService } from './shared/result.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, TestComponent, ResultComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  private resultService = inject(ResultService);
  showModal = this.resultService.showModal;
}
