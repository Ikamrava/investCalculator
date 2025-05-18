import { Component, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { userInput } from '../../model';
import { InvokeFunctionExpr } from '@angular/compiler';


@Component({
  selector: 'app-user-input',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  calculate = output<userInput>()
  initialInvestment = "0"
  annualInvestment = "0"
  expectedReturn = "5"
  duration = "0"

  onSubmit(){
    this.calculate.emit({
      initialInvestment:+this.initialInvestment,
      annualInvestment:+this.annualInvestment,
      expectedReturn:+this.expectedReturn,
      duration: +this.duration
    })
  }
}
