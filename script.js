var numero =  prompt('Digite um número :');

function verificaPositivosOuNegativos(numero){
    if(numero > 0){
        return console.log('P');
    }else{
        return console.log('N');
    }
}

verificaPositivosOuNegativos(numero);
