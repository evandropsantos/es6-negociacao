class Negociacao {
    constructor(data, quantidade, valor){
        this._data = new Date(data.getTime()); // Blindando a data para nao ser alterada
        this._quantidade = quantidade;
        this._valor = valor; 

        // Congela o objeto impedindo a alteracao das propridades, (Exceto objetos).
        Object.freeze(this);
    }

    get volume(){
        return this._quantidade * this._valor;
    }

    get data(){
        // Cria uma nova data baseada na data da negociacao impedindo que a data original seja alterada (Resolve o problema do objeto).
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
}