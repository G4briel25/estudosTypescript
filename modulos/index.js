"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Importação de arquivos
const greet_js_1 = __importDefault(require("./greet.js"));
(0, greet_js_1.default)();
// Importação de variavel
const importandoVariaveis_js_1 = require("./importandoVariaveis.js");
console.log(importandoVariaveis_js_1.x);
// Multiplas importações
const multiplosImports_js_1 = require("./multiplosImports.js");
console.log(multiplosImports_js_1.variaveis1, multiplosImports_js_1.variaveis2);
console.log(multiplosImports_js_1.variaveis3);
(0, multiplosImports_js_1.variaveis4)();
// Trocando o nome usando o alias
const alias_js_1 = require("./alias.js");
console.log(alias_js_1.someName);
// Importando tudo usando o *
const meusNumeros = __importStar(require("./importandoTudo.js"));
console.log(meusNumeros.n1);
console.log(meusNumeros.n2);
console.log(meusNumeros.n3);
class User {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }
}
const user1 = new User("Humano1", 25);
console.log(user1.name, user1.age);
