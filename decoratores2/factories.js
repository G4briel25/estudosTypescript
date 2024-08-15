"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Log(target) {
    console.log(target);
}
let MinhaClasse = class MinhaClasse {
    constructor(_name) {
        this.name = _name;
    }
};
MinhaClasse = __decorate([
    Log
], MinhaClasse);
// const minhaClasse = new MinhaClasse("Teste");
// console.log(minhaClasse);
// Segundo exemplo
function Log2(prefix) {
    return function (target) {
        console.log(prefix, target);
    };
}
let Exemplo = class Exemplo {
};
Exemplo = __decorate([
    Log2("print")
], Exemplo);
// Terceiro exemplo
function setAPIVersion(apiVersion) {
    return (constructor) => {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this.versão = apiVersion;
            }
        };
    };
}
let API = class API {
};
API = __decorate([
    setAPIVersion('v1.0.0')
], API);
console.log(new API);
let WebHook = class WebHook {
};
WebHook = __decorate([
    setAPIVersion('v1.0.2')
], WebHook);
console.log(new WebHook);
// Quarto exemplo - usando propriedades
function minLength(length) {
    return (target, key) => {
        console.log(length, target, key);
        const val = target[key];
    };
}
class Category {
    constructor(_title) {
        this.titulo = _title;
    }
}
__decorate([
    minLength(3)
], Category.prototype, "titulo", void 0);
console.log(new Category('teste'));
