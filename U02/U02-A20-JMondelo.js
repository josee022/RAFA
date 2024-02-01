var palindromo = prompt('Introduce el palindromo :').toLowerCase();

function palindromos(palindromo){

    var palabra_normal = palindromo.replace(',', '').trim();
    var palabra_invertida = palabra_normal.split('').reverse().join('');

    if (palabra_normal == palabra_invertida){
        document.getElementById('div1').innerHTML = palindromo+' = es un palindromo';
    } else {
        document.getElementById('div1').innerHTML = palindromo+' = no es un palindromo'
    }

}
palindromos(palindromo)
