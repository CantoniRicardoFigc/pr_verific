//dichiaro oggetto con i suoi attributi
cuffia = {
    nome: "cuffia nuoto",
    costo: 10,
    valutazione: "efficace, copre bene, è ottima e a poco prezzo",
    descrizione: "cuffia nuoto per acquapark o gare agonistiche",
    caratteristicheCompleteC: function() {
        return this.nome + ", " + this.costo + "$, " +  this.valutazione + ",\n " + this.descrizione;
    }
}
let i=false;
//funz bottone
function buttonCuffia() {
    if (!i) {
        document.getElementById("p_di_cuffia").innerHTML = cuffia.caratteristicheCompleteC();
        i=true;
    }
    else {
        document.getElementById("p_di_cuffia").innerHTML = "";
        i=false;
    }
}