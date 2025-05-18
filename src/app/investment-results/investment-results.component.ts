import { Component, Input } from '@angular/core';
import { Results } from '../../model';

@Component({
  selector: 'app-investment-results',
  imports: [],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
@Input() results?:Results[]
}
