module.exports = rawRequest => {
  const rawMethod = rawRequest.split(' ');
  const rawArray = rawRequest.split('\r\n');

  const noBodyPaths = ['GET', 'DELETE'];

  if(noBodyPaths.includes(rawMethod[0])) {
    return {
      method: rawMethod[0],
      path: rawMethod[1]
    };
  } else return {
    method: rawMethod[0],
    path: rawMethod[1],
    body: rawArray[rawArray.length - 1]
  };
};

