import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms'

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    productsForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.productsForm = this.fb.group({
            products: this.fb.array([]),
        });
    }

    products(): FormArray {
        return this.productsForm.get("products") as FormArray
    }

    newProduct(): FormGroup {
        return this.fb.group({
            prd: '',
            price: '',
        })
    }

    addProduct() {
        this.products().push(this.newProduct());
    }

    removeProduct(i: number) {
        this.products().removeAt(i);
    }
}