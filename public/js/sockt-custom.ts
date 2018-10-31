var socket = io();
// ON es para escuchar
socket.on('connect', function() {
  console.log('conectado con el servidor');
});
socket.on('disconnect', function() {
  console.log('Perdida conexión con el servidor');
});
// EMIT es para enviar información
socket.emit(
  'enviarMensaje',
  {
    usuario: 'Alberto',
    mensaje: 'Hola Mundo'
  },
  function(resp: any) {
    console.log('Respuesta server: ', resp);
  }
);
// Listener: Escuchar información
socket.on('enviarMensaje', function(mensaje) {
  console.log('Servidor: ', mensaje);
});
