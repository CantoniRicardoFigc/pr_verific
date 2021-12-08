//dichiaro oggetto con i suoi attributi
occhialini = {
    nome: "occhialini nuoto",
    costo: 15,
    valutazione: "efficaci, comodi e ottimo rapporto qualità prezzo",
    descrizione: "occhialini nuoto per gare agonistiche",
    caratteristicheCompleteO: function() {
        return this.nome + ", " + this.costo + "$, " +  this.valutazione + ",\n " + this.descrizione;
    }
}
let i=false;
//funz bottone
function buttonOcchialini() {
    if (!i) {
        document.getElementById("p_di_occhialini").innerHTML = occhialini.caratteristicheCompleteO();
        i=true;
    }
    else {
        document.getElementById("p_di_occhialini").innerHTML = "";
        i=false;
    }
}