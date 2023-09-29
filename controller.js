'use strict';//Modo restrito hj
//Consumindo API de CEP, do ViaCep
//https://viacep.com.br/

//Função para limpar o formulário
const limparFormulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

//verifica se CEP é valido
const eNumero = (numero) => /^[0-9]+$/.test(numero);//testa número informado com expressão regular
const cepValido = (cep) => cep.length == 8 && eNumero(cep);// Verifica tamanho do cep digite e executa função de validação do cep eNumero