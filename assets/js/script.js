/* Div que va a tener la tabla del 1 */
const tabla1 = document.getElementById("tablaDel1");
/* Boton para la tabla del 1 */
const boton = document.getElementById("boton");
// console.log(tabla1);
boton.addEventListener('click', () => {
    let arreglo = [];
    // let tabla = []
    // arreglo.push('1' + ' ' + '*' + ' ' + i + '\n');
    for (let i = 0; i < 10; i++) {
        // arreglo.push(1 * i);
        arreglo.push('<h3> 1 x ' + i + ' = ' + 1 * i + '</h3>');

    }
    if (tabla1.classList.contains('efecto')) {
        tabla1.classList.remove('efecto');

    } else {
        tabla1.classList.add('efecto');
        tabla1.innerHTML = arreglo;

    }

})


// console.log(arreglo);