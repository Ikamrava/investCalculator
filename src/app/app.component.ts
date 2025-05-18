import { Component, Input } from '@angular/core';
import { HeaderComponent } from "./header/header/header.component";
import { UserInputComponent } from "./user-input/user-input.component";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
import { Results } from '../model';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'investCalculator';
  resultsData?:Results[]

  calculateInvestmentResults(data:{initialInvestment:number,annualInvestment:number,expectedReturn:number,duration:number}) {
  const annualData = [];
  const {initialInvestment,duration,expectedReturn,annualInvestment} = data
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: initialInvestment + annualInvestment * year,
    });
  }

  this.resultsData = annualData
}

}
