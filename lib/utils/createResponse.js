module.exports = ({ body, contentType, status }) => {
  const rawResponse = {
    body,
    status,
    contentType
  };

  const response = (`HTTP/1.1 ${rawResponse.status}
Accept-Ranges: bytes
Content-Length: ${rawResponse.body.split('').length}
Content-Type: ${rawResponse.contentType}\r
\r
${rawResponse.body}`);

  return response;
};
