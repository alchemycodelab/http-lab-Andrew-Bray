module.exports = ({ body = '', contentType = 'text/html', status = '200 OK' }) => {
  const rawResponse = {
    body: '<h1>hi there</h1>',
    status: '200 OK',
    contentType: 'text/html'
  };

  const response = `HTTP/1.1 ${rawResponse.status}
Accept-Ranges: bytes
Content-Length: ${rawResponse.body.split('').length}
Content-Type: ${rawResponse.contentType}\r
\r
${rawResponse.body}`;

  return response;
};
