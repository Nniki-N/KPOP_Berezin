import { Input, Component } from '@angular/core';

@Component({
    selector: 'child-comp',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.css']
})
export class ChildComponent {
    @Input() products: string;

    get totalPrice(): string {
        let length = JSON.parse(this.products).length;
        let sum = 0;

        if (length == 0) {
            return ''
        } else {
            for (let product of JSON.parse(this.products)) {
                let price = product.price;
                let prd = product.prd;

                if ((typeof prd === "string" && prd.length === 0) || prd === null) {
                    continue;
                }

                sum += Number.isNaN(price) || typeof price == "string"? 0 : price;
            }
        }

        return 'Total price: ' + sum.toString();
    }
}
