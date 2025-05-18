import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInput } from '../../model';
import { InvestService } from '../invest.service';



@Component({
  selector: 'app-user-input',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  initialInvestment = signal("2000") 
  annualInvestment = signal("500")
  expectedReturn = signal("5") 
  duration = signal("10")

  constructor(private investmentSerice:InvestService){}

  onSubmit(){
    this.investmentSerice.calculateInvestmentResults({
      initialInvestment:+this.initialInvestment(),
      annualInvestment:+this.annualInvestment(),
      expectedReturn:+this.expectedReturn(),
      duration: +this.duration()
    })
  }
}
