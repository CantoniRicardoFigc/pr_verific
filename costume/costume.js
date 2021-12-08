//dichiaro oggetto con i suoi attributi
costume = {
    nome: "costume nuoto",
    costo: 22,
    valutazione: "comodi, elastici, poco fastidiosi e adatti per gare ",
    descrizione: "costume nuoto per gare agonistiche",
    caratteristicheCompleteC1: function() {
        return this.nome + ", " + this.costo + "$, " +  this.valutazione + ",\n " + this.descrizione;
    }
}
let i=false;
//funz bottone
function buttonCostume() {
    if (!i) {
        document.getElementById("p_di_costume").innerHTML = costume.caratteristicheCompleteC1();
        i=true;
    }
    else {
        document.getElementById("p_di_costume").innerHTML = "";
        i=false;
    }
}