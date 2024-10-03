//para estas pruebas vamos a usar el plugin chai-http
//npm install chai-http --save-dev
//y lo requerimos
//const chatHttp = require('chai-http');
//y lo usamos
//chai.use(chatHttp)

process.env.NODE_ENV = 'test';
const server = require('../server');
const assert = require('chai').assert;
const chai = require('chai');
const chatHttp = require('chai-http');
chai.use(chatHttp)

//primero verificamos que el servidor ya esta levantado
before(function (done) {
    server.on("appStarted", function(){
        done();
    });
});


//haremos una prueba haciendo una peticion a la ruta /
//y verificando que el status sea 200
//note que ahora se utiliza el parametro done
describe('02 prueba peticiones usaremos chai-http', () => {

    //primera prueba para verificar que raiz responda
    it('probando el status de el get a la raiz', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                assert.equal(res.status, 200);
                done();
            });
    }
    );


    //segunda prueba insertamos una tarea
    //obtendremos el id de la tarea insertada para luego eliminarla
    let idTarea = '';
    it('Insertando datos', (done) => {
        chai.request(server)
            .post('/tareas')
            .send({ nombre: 'insertando prueba mocha ABC', hecho:false })
            .end((err, res) => {
                //console.log(res.body);
                idTarea = res.body.id;
                assert.equal(res.status, 200);
                done();
            });
    });


    //verificamos que la nueva tarea este agregada en la ruta /tarea
    it('Verificando que la tarea se inserto', (done) => {
        chai.request(server)
            .get('/tareas')
            .end((err, res) => {
                assert.equal(res.status, 200);
                //console.log(res.body);
                let tareas=res.body;
                //console.log(idTarea);
                let tarea=tareas.find(t=>t._id==idTarea);
                assert.equal(tarea._id,idTarea);
                done();
            });
    });


    //ahora eliminamos la tarea que acabamos de agregar
    it('Eliminando la tarea insertada', (done) => {
        chai.request(server)
            .delete('/tareas/delete/'+idTarea)
            .end((err, res) => {
                assert.equal(res.status, 204);
                done();
            });
    }
    );


});
// DSI235 - Carlos Oswaldo Vásquez Girón - VG21009