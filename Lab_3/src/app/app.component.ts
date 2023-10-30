import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<label>First number:</label>
                <input [(ngModel)]="num1" placeholder="number">
                <label>Second number:</label>
                <input [(ngModel)]="num2" placeholder="number">
                <h2>Addition: {{add(num1, num2)}}</h2>
                <h2>Multiplication: {{multiply(num1, num2)}}</h2>
                <h2>Subtraction: {{subtract(num1, num2)}}</h2>`,
})

export class AppComponent {
    add(num1: string, num2: string): string {
        let result = parseInt(num1) + parseInt(num2);
        return Number.isNaN(result) ? '' : result.toString();
    }

    subtract(num1: string, num2: string): string {
        let result = parseInt(num1) - parseInt(num2);
        return Number.isNaN(result) ? '' : result.toString();
    }
    
    multiply(num1: string, num2: string): string {
        let result = parseInt(num1) * parseInt(num2);
        return Number.isNaN(result) ? '' : result.toString();
    }
}

