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