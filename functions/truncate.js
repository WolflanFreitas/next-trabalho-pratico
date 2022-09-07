//Funcao js para truncar/cortar string e jogar "..." no final de acordo com o tamanho/size desejado
//@param str: string do texto pra truncar/cortar. Deve ter o tamanho mínimo para comportar os 3 caracteres "..."
//@param size: tamanho da string antes dos "..."
export default function doTruncarStr(str, size) {
    if (str == undefined || str == 'undefined' || str == '' || size == undefined || size == 'undefined' || size == '') {
        return str;
    }

    var shortText = str;
    if (str.length >= size + 3) {
        shortText = str.substring(0, size).concat('...');
    }
    return shortText;
}