const calculadora = {
    sumar : function (a,b) {
        return a + b
    },
    restar : function (a,b) {
        return a - b
    },
    multiplicar : function (a,b) {
        return a * b
    },
    dividir : function (a,b) {
        return a / b
    },
    potenciacion : function (a,b) {
        return a ** b
    },
    raizCuadrada : function (a) {
        return Math.sqrt(a)
    },
    raizCubica : function (a) {
        return Math.cbrt(a)
    }
}

module.exports = calculadora

