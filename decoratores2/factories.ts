function log(prefixo: string) {
    return (target: any) => {
        console.log(prefixo, target);        
    }
}

@log("print")
class MinhaClasse {

}