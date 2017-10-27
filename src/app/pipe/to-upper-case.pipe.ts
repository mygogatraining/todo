import { Pipe } from "@angular/core";

@Pipe({
    name: 'toUpperCase'
})
export class ToUpperCase {
    transform(value: string) {
        return value.substr(0,1).toUpperCase() + value.substr(1);
        // return value.toUpperCase();
    }
}