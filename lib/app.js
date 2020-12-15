const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  console.log('Check out dat server!!');

  socket.on('data', data => {
    const request = parseRequest(data.toString());

    if(request.method === 'GET' && request.path === '/red') {
      socket.end(createResponse({ body: '<h1> red </h1>', contentType: 'text/plain', status: '200 OK' }));
    } 
    else if(request.method === 'GET' && request.path === '/blue') {
      socket.end(createResponse({ body: '<h1> blue </h1>', contentType: 'text/plain', status: '200 OK' }));
    } 
    else if(request.method === 'GET' && request.path === '/green') {
      socket.end(createResponse({ body: '<h1> green </h1>', contentType: 'text/plain', status: '200 OK' }));
    } else if(request.method === 'GET' && request.path === '/') {
      socket.end(createResponse({ body: '<h1> hi </h1>', contentType: 'text/plain', status: '200 OK' }));
    } else if(request.method === 'POST' && request.path === '/echo') {
      socket.end(createResponse({ body: request.body, contentType: 'text/plain', status: '200 OK' }));
    } 
    
    
    else {
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});
module.exports = app;
