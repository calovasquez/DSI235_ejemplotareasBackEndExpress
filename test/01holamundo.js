const assert = require('chai').assert;

//haremos una prueba sencilla note la estructura de la prueba en mocha
//tenemos un describe que es una descripcion de un conjunto de pruebas
// y dentro de el tenemos un it que es una prueba en si

describe('01 prueba hola mundo', () => {
    it('estoy haciendo la primera prueba', () => {
        assert.equal(true, true);
    });
});