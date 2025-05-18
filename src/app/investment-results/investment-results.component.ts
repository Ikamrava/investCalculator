import { Component, inject, input, Input } from '@angular/core';
import { Results } from '../../model';
import { CurrencyPipe } from '@angular/common';
import { InvestService } from '../invest.service';

@Component({
  selector: 'app-investment-results',
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  private investmentService = inject(InvestService)
  get results(){
    return this.investmentService.resultsData
  } 
}
