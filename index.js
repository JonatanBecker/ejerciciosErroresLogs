
function miFuncion(numero) {
    if (typeof numero !== "number") {
    throw new Error(`Debe introducir un valor de tipo numero`)
    } else {
        console.log(numero)
    }
}
const ingreseNumero = "hola"
miFuncion(ingreseNumero)



try {
    miFuncion();
} catch (error) {
    console.error("ERROR!")
};