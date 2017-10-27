var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pipe } from "@angular/core";
var ToUpperCase = (function () {
    function ToUpperCase() {
    }
    ToUpperCase.prototype.transform = function (value) {
        return value.substr(0, 1).toUpperCase() + value.substr(1);
        // return value.toUpperCase();
    };
    return ToUpperCase;
}());
ToUpperCase = __decorate([
    Pipe({
        name: 'toUpperCase'
    })
], ToUpperCase);
export { ToUpperCase };
//# sourceMappingURL=to-upper-case.pipe.js.map