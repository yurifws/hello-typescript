var minhaVar = 'minha variavel';

function minhaFuncao(x, y) {
    return x + y;
}

var numeros = [1, 2, 3, 4, 5, 6];

numeros.map(function (item) {
    return item * 2;
});

numeros.map(function (item) {
    item * 2;
});

var Matematica2 = (function () {
    function Matematica2() {
    }
    Matematica2.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica2;
})();

var n1 = 'string';
