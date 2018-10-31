"use strict";
var socket = io();
socket.on('connect', function () {
    console.log('conectado con el servidor');
});
socket.on('disconnect', function () {
    console.log('Perdida conexión con el servidor');
});
socket.emit('enviarMensaje', {
    usuario: 'Alberto',
    mensaje: 'Hola Mundo'
}, function (resp) {
    console.log('Respuesta server: ', resp);
});
socket.on('enviarMensaje', function (mensaje) {
    console.log('Servidor: ', mensaje);
});
//# sourceMappingURL=sockt-custom.js.map