class NegociacaoController{
    constructor(){
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
    }

    adiciona(event){
        event.preventDefault();
        
        let data = new Date(...
            this._inputData.value
                .split('-')
                .map((item, indice) => item - indice % 2) // Subtrair o mes por 1 (JS o mes inicia em 0).
        );

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );

       console.log(negociacao);
    }
}